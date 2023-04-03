import { CharacterType } from "../types";
import defaultImage from "./Valtarin_default.png";

export const Valtarin: CharacterType = {
  name: "Valtarin",
  shortDescription: "Valtarin",
  image: defaultImage,
  defaultEffects: [],
  defaultMainStats: {
    hp: 15,
    sp: 40,
  },
  defaultStats: {
    charisma: 5,
    dexterity: 6,
    intelligence: 8,
    faith: 15,
    perception: 4,
    strength: 4,
  },
};
