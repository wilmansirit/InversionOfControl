import { ThrowableWeapon } from "./interfaces";

export class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}