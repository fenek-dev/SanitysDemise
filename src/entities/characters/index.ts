import { DIFFICULTIES } from "../maps/difficulties";
import { Lucian } from "./Lucian/character";
import { Valtarin } from "./Valtarin/character";
import { CharacterType } from "./types";

export const ALL_CHARACTERS = [Lucian, Valtarin];

export const EmptyMainStats = {
  hp: 0,
  maxHp: 0,
  maxSp: 0,
  sp: 0,
};
export const EmptySkillStats = {
  charisma: 0,
  dexterity: 0,
  faith: 0,
  intelligence: 0,
  perception: 0,
  strength: 0,
};

export const EmptyCharacterImageMap = {
  norm: "",
};
export const EmptyCharacter: CharacterType = {
  defaultEffects: [],
  defaultItems: [],
  defaultMainStats: EmptyMainStats,
  defaultSkillStats: EmptySkillStats,
  difficulty: DIFFICULTIES._empty,
  image: "",
  imageMap: EmptyCharacterImageMap,
  name: "",
  shortDescription: [""],
};
