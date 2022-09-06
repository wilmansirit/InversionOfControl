import {describe, expect, test} from '@jest/globals';

import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);


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