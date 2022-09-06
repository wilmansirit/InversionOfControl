import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
import { Katana } from "./katana";
import { Shuriken } from "./shuriken";

export class Ninja implements Warrior { 

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(dependencies :{katana:Katana; shuriken:Shuriken}) {

        this._katana = dependencies.katana;
        this._shuriken = dependencies.shuriken;
    }

    public fight = () => this._katana.hit();
    public sneak = () => this._shuriken.throw();

}