import { OpeningScene } from "@/entities/scenes/opening/opening.scene";
import { SceneType } from "@/entities/scenes/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GeneralState {
  currentScene: SceneType | null;
}

const initialState: GeneralState = {
  currentScene: null,
};

export const GeneralSlice = createSlice({
  name: "General",
  initialState,
  reducers: {
    setCurrentScene: (state, action: PayloadAction<SceneType>) => {
      state.currentScene = action.payload;
    },
    removeCurrentScene: (state) => {
      state.currentScene = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentScene, removeCurrentScene } = GeneralSlice.actions;

export default GeneralSlice.reducer;
