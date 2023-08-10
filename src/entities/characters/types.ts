import { DIFFICULTIES } from "../maps/difficulties";
import { ItemType } from "../items/types";

export interface CharacterType {
  name: string;
  shortDescription: string[];
  image: string;
  defaultSkillStats: BasicSkillStats;
  difficulty: keyof typeof DIFFICULTIES;
  defaultMainStats: BasicMainStats;
  defaultEffects: unknown[];
  imageMap: CharacterImageMap;
  defaultItems: ItemType[];
}

export interface BasicMainStats {
  hp: number;
  sp: number;
  maxHp: number;
  maxSp: number;
}

export interface BasicSkillStats {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  faith: number;
  perception: number;
}

export interface CharacterImageMap {
  norm: string;
}
