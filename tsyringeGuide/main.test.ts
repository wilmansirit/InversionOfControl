import {describe, expect, test} from '@jest/globals';
import { ninja } from "./container";


describe('Nija module fight', () => {
  test('Module fight()', () => {
      expect(ninja.fight()).toBe("cut!");
  });
});

describe('Nija module sneak', () => {
  test('Module sneak', () => {
      expect(ninja.sneak()).toBe("hit!");
  });
});