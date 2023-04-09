import { ALL_LOCATIONS, LOCATION_NAMES } from "@/entities/locations";
import { HomeLocation } from "@/entities/locations/home/home.location";
import { LocationType } from "@/entities/locations/types";
import { OpeningScene } from "@/entities/scenes/opening/opening.scene";
import { SceneType } from "@/entities/scenes/types";
import { EmptyCharacterStory } from "@/entities/stories";
import { CharacterMainStory } from "@/entities/stories/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GeneralState {
  currentScene: SceneType | null;
  currentScreen: "locations" | "event_1" | "event_2" | "fight";
  currentLocation: LocationType;
  mainStory?: CharacterMainStory;
}

const initialState: GeneralState = {
  currentScene: null,
  currentScreen: "locations",
  currentLocation: HomeLocation,
  mainStory: EmptyCharacterStory,
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
    changeLocation: (state, action: PayloadAction<LOCATION_NAMES>) => {
      state.currentLocation = ALL_LOCATIONS[action.payload];
    },
    setMainStory: (state, action: PayloadAction<CharacterMainStory>) => {
      state.mainStory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentScene,
  removeCurrentScene,
  changeLocation,
  setMainStory,
} = GeneralSlice.actions;

export default GeneralSlice.reducer;
