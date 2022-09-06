import { Weapon } from "./interfaces";

export class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}