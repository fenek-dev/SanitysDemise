import { ItemType } from "../items/types";
import { DIFFICULTIES } from "../maps/difficulties";

export interface CharacterType {
  defaultEffects: unknown[];
  defaultItems: ItemType[];
  defaultMainStats: BasicMainStats;
  defaultSkillStats: BasicSkillStats;
  difficulty: keyof typeof DIFFICULTIES;
  image: string;
  imageMap: CharacterImageMap;
  name: string;
  shortDescription: string[];
}

export interface BasicMainStats {
  hp: number;
  maxHp: number;
  maxSp: number;
  sp: number;
}

export interface BasicSkillStats {
  charisma: number;
  dexterity: number;
  faith: number;
  intelligence: number;
  perception: number;
  strength: number;
}

export interface CharacterImageMap {
  norm: string;
}
