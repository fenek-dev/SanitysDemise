import { DIFFICULTIES } from "../maps/difficulties";
import { Lucian } from "./Lucian/character";
import { Valtarin } from "./Valtarin/character";
import { CharacterType } from "./types";

export const ALL_CHARACTERS = [Lucian, Valtarin];

export const EmptyMainStats = {
  hp: 0,
  sp: 0,
  maxHp: 0,
  maxSp: 0,
};
export const EmptySkillStats = {
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  charisma: 0,
  faith: 0,
  perception: 0,
};

export const EmptyCharacterImageMap = {
  norm: "",
};
export const EmptyCharacter: CharacterType = {
  name: "",
  shortDescription: [""],
  cardImage: "",
  difficulty: DIFFICULTIES._empty,
  defaultEffects: [],
  defaultMainStats: EmptyMainStats,
  defaultSkillStats: EmptySkillStats,
  imageMap: EmptyCharacterImageMap,
};
