import "reflect-metadata";
import { createContainer, asClass, InjectionMode } from "awilix";
import {Ninja} from "./entities";
import { Katana } from "./katana";
import { Shuriken } from "./shuriken";



const container = createContainer({
    injectionMode: InjectionMode.PROXY
})

container.register({
        katana: asClass(Katana).scoped(),
        shuriken: asClass(Shuriken).scoped(),
        ninja: asClass(Ninja).scoped()
})

const katana = container.resolve("katana");
const shuriken = container.resolve("shuriken");
const ninja = container.resolve("ninja");

export {container, katana, shuriken, ninja}