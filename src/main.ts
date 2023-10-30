import { Cd } from "./cd.js";
import { Dvd } from "./dvd.js";
import { Vinyl } from "./vinyl.js";
import { Player } from "./player.js";

const cd1 = new Cd("Cd1", "CD-R");
const dvd1 = new Dvd("Dvd1", "4");
const vinyl1 = new Vinyl("Vinilo 1", "Special Vinyl");
const player = new Player();

player.play(cd1);
player.play(dvd1);
player.play(vinyl1);
console.log(cd1.toString());
console.log(dvd1.toString());
