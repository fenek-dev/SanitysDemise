import {
  EmptyCharacter,
  EmptyMainStats,
  EmptySkillStats,
} from "@/entities/characters";
import { Lucian } from "@/entities/characters/Lucian/character";
import {
  BasicMainStats,
  BasicSkillStats,
  CharacterType,
} from "@/entities/characters/types";
import { ItemType } from "@/entities/items/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export interface CharacterState {
  selectedCharacter: CharacterType;
  currentMainStats: BasicMainStats;
  currentSkillStats: BasicSkillStats;
  effects: unknown[];
  items: ItemType[];
}

const initialState: CharacterState = {
  selectedCharacter: Lucian,
  currentMainStats: EmptyMainStats,
  currentSkillStats: EmptySkillStats,
  effects: [],
  items: [],
};

export const CharacterSlice = createSlice({
  name: "Character",
  initialState,
  reducers: {
    chooseCharacter: (state, action: PayloadAction<CharacterType>) => {
      state.selectedCharacter = action.payload;
    },
    startNewGame: (state) => {
      state.currentMainStats = state.selectedCharacter.defaultMainStats;
      state.currentSkillStats = state.selectedCharacter.defaultSkillStats;
      state.items = state.selectedCharacter.defaultItems;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseCharacter, startNewGame } = CharacterSlice.actions;

export default CharacterSlice.reducer;
