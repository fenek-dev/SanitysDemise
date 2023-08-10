import { CharacterType } from "../types";
import image from "./Lucian_bg.png";
import defaultImage from "./Lucian_default.png";
import { DIFFICULTIES } from "@/entities/maps/difficulties";
import _ from "lodash";
import { Katana_weapon } from "@/entities/items/weapon/unique/Katana/katana.item";

export const Lucian: CharacterType = {
  name: "Lucian",
  shortDescription: ["[No Effects]"],
  image,
  difficulty: DIFFICULTIES.easy,
  defaultEffects: [],
  defaultMainStats: {
    hp: 30,
    sp: 30,
    maxHp: 30,
    maxSp: 30,
  },
  defaultSkillStats: {
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    charisma: 10,
    faith: 10,
    perception: 10,
  },
  imageMap: {
    norm: defaultImage,
  },
  defaultItems: [Katana_weapon],
};
