import type { PayloadAction } from "@reduxjs/toolkit";

import { EmptyMainStats, EmptySkillStats } from "@/entities/characters";
import { Lucian } from "@/entities/characters/Lucian/character";
import {
  BasicMainStats,
  BasicSkillStats,
  CharacterType,
} from "@/entities/characters/types";
import { ItemType } from "@/entities/items/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CharacterState {
  currentMainStats: BasicMainStats;
  currentSkillStats: BasicSkillStats;
  effects: unknown[];
  items: ItemType[];
  selectedCharacter: CharacterType;
}

const initialState: CharacterState = {
  currentMainStats: EmptyMainStats,
  currentSkillStats: EmptySkillStats,
  effects: [],
  items: [],
  selectedCharacter: Lucian,
};

export const CharacterSlice = createSlice({
  initialState,
  name: "Character",
  reducers: {
    chooseCharacter: (state, action: PayloadAction<CharacterType>) => {
      state.selectedCharacter = action.payload;
    },
    resetCharacterSlice: () => initialState,
    setCharacter: (_state, action: PayloadAction<CharacterState>) =>
      action.payload,
    startNewGame: (state) => {
      state.currentMainStats = state.selectedCharacter.defaultMainStats;
      state.currentSkillStats = state.selectedCharacter.defaultSkillStats;
      state.items = state.selectedCharacter.defaultItems;
    },
  },
});

export const {
  chooseCharacter,
  resetCharacterSlice,
  setCharacter,
  startNewGame,
} = CharacterSlice.actions;

export default CharacterSlice.reducer;
