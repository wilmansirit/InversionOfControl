import { inject, injectable } from "tsyringe";
import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";

export class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

export class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@injectable()
export class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject("Ketana") private katana:Katana, 
        @inject("Shuriken") private shuriken:Shuriken) {

        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight = () => this._katana.hit();
    public sneak = () => this._shuriken.throw();

}