import "reflect-metadata";
import { container } from "tsyringe";
import { Katana, Shuriken, Ninja } from "./entities";


// Class
container.register("Ketana", {useClass: Katana});
container.register("Shuriken",{useClass: Shuriken});

// Resolve
export const ninja = container.resolve(Ninja);
