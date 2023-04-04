import { DIFFICULTIES } from "../maps/difficulties";

export interface CharacterType {
  name: string;
  shortDescription: React.ReactNode;
  cardImage: string;
  defaultSkillStats: BasicSkillStats;
  difficulty: keyof typeof DIFFICULTIES;
  defaultMainStats: BasicMainStats;
  defaultEffects: unknown[];
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
