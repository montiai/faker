import { describe, expect, it, vi } from 'vitest';
import { FakerError, base, en, faker } from '../../src';
import { createFakerCore } from '../../src/faker-core';
import { airline } from '../../src/modules/airline/airline';
import { fakeEval } from '../../src/modules/helpers/_eval';
import { mustache } from '../../src/modules/helpers/mustache';
import { slugify } from '../../src/modules/helpers/slugify';
import { alphanumeric } from '../../src/modules/string/alphanumeric';
import { numeric } from '../../src/modules/string/numeric';

const fakerCore = createFakerCore({ definitions: [en, base] });
const moduleRegistry = {
  airline: { airline },
  string: { alphanumeric, numeric },
  helpers: { mustache, slugify },
};

const moduleEntrypoints = [moduleRegistry];
const fullEntrypoints = [moduleRegistry, fakerCore.definitions];

describe('fakeEval()', () => {
  it('does not allow empty string input', () => {
    expect(() => fakeEval(fakerCore, '')).toThrowError(
      new FakerError('Eval expression cannot be empty.')
    );
  });

  it('does not allow empty entrypoints', () => {
    expect(() => fakeEval(fakerCore, 'foobar', [])).toThrowError(
      new FakerError('Eval entrypoints cannot be empty.')
    );
  });

  it('supports single pattern part invocations', () => {
    const actual = fakeEval(fakerCore, 'string', moduleEntrypoints);
    expect(actual).toBeTypeOf('object');
    expect(actual).toBe(moduleRegistry.string);
  });

  it('supports simple method calls', () => {
    const spy = vi.spyOn(moduleRegistry.string, 'numeric');
    const actual = fakeEval(fakerCore, 'string.numeric', moduleEntrypoints);
    expect(spy).toHaveBeenCalledWith(fakerCore);
    expect(actual).toBeTypeOf('string');
    expect(actual).toMatch(/^\d$/);
  });

  it('supports method calls without arguments', () => {
    const spy = vi.spyOn(moduleRegistry.string, 'numeric');
    const actual = fakeEval(fakerCore, 'string.numeric()', moduleEntrypoints);
    expect(spy).toHaveBeenCalledWith(fakerCore);
    expect(actual).toBeTypeOf('string');
    expect(actual).toMatch(/^\d$/);
  });

  it('supports method calls with simple arguments', () => {
    const spy = vi.spyOn(moduleRegistry.string, 'numeric');
    const actual = fakeEval(fakerCore, 'string.numeric(5)', moduleEntrypoints);
    expect(spy).toHaveBeenCalledWith(fakerCore, 5);
    expect(actual).toBeTypeOf('string');
    expect(actual).toMatch(/^\d{5}$/);
  });

  it('supports method calls with complex arguments', () => {
    const spy = vi.spyOn(moduleRegistry.string, 'numeric');
    const actual = fakeEval(
      fakerCore,
      'string.numeric({ "length": 5, "allowLeadingZeros": true, "exclude": ["5"] })',
      moduleEntrypoints
    );
    expect(spy).toHaveBeenCalledWith(fakerCore, {
      length: 5,
      allowLeadingZeros: true,
      exclude: ['5'],
    });
    expect(actual).toBeTypeOf('string');
    expect(actual).toMatch(/^[0-46-9]{5}$/);
  });

  it('supports method calls with multiple arguments', () => {
    const spy = vi.spyOn(moduleRegistry.helpers, 'mustache');
    const actual = fakeEval(
      fakerCore,
      'helpers.mustache("{{foo}}", { "foo": "bar" })',
      moduleEntrypoints
    );
    expect(spy).toHaveBeenCalledWith(fakerCore, '{{foo}}', { foo: 'bar' });
    expect(actual).toBeTypeOf('string');
    expect(actual).toBe('bar');
  });

  it('supports method calls with unquoted string argument', () => {
    const spy = vi.spyOn(moduleRegistry.helpers, 'slugify');
    const actual = fakeEval(fakerCore, 'helpers.slugify(This Works)', [
      moduleRegistry,
    ]);
    expect(spy).toHaveBeenCalledWith(fakerCore, 'This Works');
    expect(actual).toBeTypeOf('string');
    expect(actual).toBe('This-Works');
  });

  it('supports method calls with wrongly quoted argument', () => {
    const spy = vi.spyOn(moduleRegistry.helpers, 'slugify');
    const actual = fakeEval(
      fakerCore,
      "helpers.slugify('')",
      moduleEntrypoints
    );
    expect(spy).toHaveBeenCalledWith(fakerCore, "''");
    expect(actual).toBeTypeOf('string');
    expect(actual).toBe('');
  });

  it('should be able to return empty strings', () => {
    const actual = fakeEval(fakerCore, 'string.alphanumeric(0)', [
      moduleRegistry,
    ]);
    expect(actual).toBeTypeOf('string');
    expect(actual).toBe('');
  });

  it('supports returning complex objects', () => {
    const actual = fakeEval(fakerCore, 'airline.airline', moduleEntrypoints);
    expect(actual).toBeTypeOf('object');
    expect(faker.definitions.airline.airline).toContain(actual);
  });

  it('supports patterns after a function call', () => {
    const actual = fakeEval(fakerCore, 'airline.airline().name', [
      moduleRegistry,
    ]);
    expect(actual).toBeTypeOf('string');
    expect(
      fakerCore.definitions.airline?.airline?.map(({ name }) => name)
    ).toContain(actual); // function().name
  });

  it('supports patterns after a function reference', () => {
    const actual = fakeEval(fakerCore, 'airline.airline.iataCode', [
      moduleRegistry,
    ]);
    expect(actual).toBeTypeOf('string');
    expect(
      fakerCore.definitions.airline?.airline?.map(({ iataCode }) => iataCode)
    ).toContain(actual);
  });

  it('requires a dot after a function call', () => {
    expect(() =>
      fakeEval(fakerCore, 'airline.airline()iataCode', moduleEntrypoints)
    ).toThrowError(
      new FakerError(
        "Expected dot ('.'), open parenthesis ('('), or nothing after function call but got 'i'"
      )
    );
  });

  it('requires a function for parameters', () => {
    expect(faker.definitions.person.first_name.generic).toBeDefined();
    expect(() =>
      fakeEval(fakerCore, 'person.first_name().generic', fullEntrypoints)
    ).toThrowError(
      new FakerError("Cannot resolve expression 'person.first_name().generic'")
    );
  });

  it('requires a valid expression (missing value)', () => {
    expect(() => fakeEval(fakerCore, 'foo.bar', fullEntrypoints)).toThrowError(
      new FakerError("Cannot resolve expression 'foo.bar'")
    );
  });

  it('requires a valid expression (trailing dot)', () => {
    expect(() =>
      fakeEval(fakerCore, 'airline.airline.', moduleEntrypoints)
    ).toThrowError(
      new FakerError("Found dot without property name in 'airline.'")
    );
    expect(() =>
      fakeEval(fakerCore, 'airline.airline.()', moduleEntrypoints)
    ).toThrowError(
      new FakerError("Found dot without property name in 'airline.()'")
    );
    expect(() =>
      fakeEval(fakerCore, 'airline.airline.().iataCode', moduleEntrypoints)
    ).toThrowError(
      new FakerError("Found dot without property name in 'airline.().iataCode'")
    );
  });

  it('requires a valid expression (unclosed parenthesis)', () => {
    expect(() =>
      fakeEval(fakerCore, 'airline.airline(', moduleEntrypoints)
    ).toThrowError(new FakerError("Missing closing parenthesis in '('"));
    expect(() =>
      fakeEval(fakerCore, 'airline.airline(.iataCode', moduleEntrypoints)
    ).toThrowError(
      new FakerError("Missing closing parenthesis in '(.iataCode'")
    );
  });
});
