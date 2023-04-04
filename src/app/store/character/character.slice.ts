import {
  EmptyCharacter,
  EmptyMainStats,
  EmptySkillStats,
} from "@/entities/characters";
import {
  BasicMainStats,
  BasicSkillStats,
  CharacterType,
} from "@/entities/characters/types";
import { DevourerType } from "@/entities/devourers/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export interface CharacterState {
  selectedCharacter: CharacterType;
  currentMainStats: BasicMainStats;
  currentSkillStats: BasicSkillStats;
  effects: unknown[];
  items: unknown[];
}

const initialState: CharacterState = {
  selectedCharacter: EmptyCharacter,
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
      console.log("action", action.payload);
    },
    startNewGame: (state, action: PayloadAction<DevourerType>) => {
      state.currentMainStats = state.selectedCharacter.defaultMainStats;
      state.currentSkillStats = state.selectedCharacter.defaultSkillStats;
      state.effects = _.concat(
        state.selectedCharacter.defaultEffects,
        action.payload.defaultEffects
      );
      console.log("action", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseCharacter, startNewGame } = CharacterSlice.actions;

export default CharacterSlice.reducer;
