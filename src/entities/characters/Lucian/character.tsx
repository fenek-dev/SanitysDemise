import { Katana_weapon } from "@/entities/items/weapon/unique/Katana/katana.item";
import { DIFFICULTIES } from "@/entities/maps/difficulties";

import { CharacterType } from "../types";
import image from "./Lucian_bg.png";
import defaultImage from "./Lucian_default.png";

export const Lucian: CharacterType = {
  defaultEffects: [],
  defaultItems: [Katana_weapon],
  defaultMainStats: {
    hp: 30,
    maxHp: 30,
    maxSp: 30,
    sp: 30,
  },
  defaultSkillStats: {
    charisma: 10,
    dexterity: 10,
    faith: 10,
    intelligence: 10,
    perception: 10,
    strength: 10,
  },
  difficulty: DIFFICULTIES.easy,
  image,
  imageMap: {
    norm: defaultImage,
  },
  name: "Lucian",
  shortDescription: ["[No Effects]"],
};
