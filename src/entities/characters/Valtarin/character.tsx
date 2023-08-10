import { DIFFICULTIES } from "@/entities/maps/difficulties";

import { CharacterType } from "../types";
import image from "./Valtarin_bg.png";
import defaultImage from "./Valtarin_default.png";

export const Valtarin: CharacterType = {
  defaultEffects: [],
  defaultItems: [],
  defaultMainStats: {
    hp: 15,
    maxHp: 15,
    maxSp: 40,
    sp: 40,
  },
  defaultSkillStats: {
    charisma: 5,
    dexterity: 6,
    faith: 15,
    intelligence: 8,
    perception: 4,
    strength: 4,
  },
  difficulty: DIFFICULTIES.hell,
  image,
  imageMap: {
    norm: defaultImage,
  },
  name: "Valtarin",
  shortDescription: ["[No Effects]"],
};
