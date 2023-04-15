import { Lucian } from "../characters/Lucian/character";
import { Valtarin } from "../characters/Valtarin/character";
import { MissingSisterStory } from "./LucianStories/MissingSister.story";
import { TrapForHunterStory } from "./LucianStories/TrapForHunter.story";
import { RevengeStory } from "./ValtarinStories/Revenge.story";
import { CharacterMainStory } from "./types";

export const ALL_STORIES = {
  [Lucian.name]: [MissingSisterStory, TrapForHunterStory],
  [Valtarin.name]: [RevengeStory],
};

export const EmptyCharacterStory: CharacterMainStory = {
  name: "",
  ends: 0,
  image: "",
  description: "",
};
