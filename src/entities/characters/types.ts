export interface CharacterType {
  name: string;
  shortDescription: string;
  image: string;
  defaultStats: BasicStats;
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
