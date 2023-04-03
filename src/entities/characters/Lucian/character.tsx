import { CharacterType } from "../types";
import defaultImage from "./Lucian_default.png";

export const Lucian: CharacterType = {
  name: "Lucian",
  shortDescription: "Lucian",
  image: defaultImage,
  defaultEffects: [],
  defaultMainStats: {
    hp: 30,
    sp: 30,
  },
  defaultStats: {
    charisma: 10,
    dexterity: 10,
    intelligence: 10,
    faith: 10,
    perception: 10,
    strength: 10,
  },
};
