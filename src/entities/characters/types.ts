import { DIFFICULTIES } from "../maps/difficulties";

export interface CharacterType {
  name: string;
  shortDescription: React.ReactNode;
  cardImage: string;
  defaultStats: BasicStats;
  difficulty: keyof typeof DIFFICULTIES;
  defaultMainStats: {
    hp: number;
    sp: number;
  };
  defaultEffects: unknown[];
}

export interface BasicStats {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  faith: number;
  perception: number;
}
