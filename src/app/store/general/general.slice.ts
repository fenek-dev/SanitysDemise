import type { PayloadAction } from "@reduxjs/toolkit";

import { EventType } from "@/entities/events/types";
import { ALL_LOCATIONS, LOCATION_NAMES } from "@/entities/locations";
import { HomeLocation } from "@/entities/locations/home/home.location";
import { LocationType } from "@/entities/locations/types";
import { SceneType } from "@/entities/scenes/types";
import { EmptyCharacterStory } from "@/entities/stories";
import { CharacterMainStory } from "@/entities/stories/types";
import { createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
  currentEvent?: EventType;
  currentLocation: LocationType;
  currentScene: SceneType | null;
  currentScreen: "event" | "fight" | "locations";
  mainStory?: CharacterMainStory;
}

const initialState: GeneralState = {
  currentEvent: undefined,
  currentLocation: HomeLocation,
  currentScene: null,
  currentScreen: "locations",
  mainStory: EmptyCharacterStory,
};

export const GeneralSlice = createSlice({
  initialState,
  name: "General",
  reducers: {
    changeLocation: (state, action: PayloadAction<LOCATION_NAMES>) => {
      state.currentScreen = "locations";
      state.currentLocation = ALL_LOCATIONS[action.payload];
    },
    removeCurrentScene: (state) => {
      state.currentScene = null;
    },
    resetGeneralSlice: () => initialState,
    setCurrentEvent: (state, action: PayloadAction<EventType>) => {
      state.currentScreen = "event";
      state.currentEvent = action.payload;
    },
    setCurrentScene: (state, action: PayloadAction<SceneType>) => {
      state.currentScene = action.payload;
    },
    setCurrentScreen: (
      state,
      action: PayloadAction<GeneralState["currentScreen"]>
    ) => {
      state.currentScreen = action.payload;
    },
    setMainStory: (state, action: PayloadAction<CharacterMainStory>) => {
      state.mainStory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeLocation,
  removeCurrentScene,
  resetGeneralSlice,
  setCurrentEvent,
  setCurrentScene,
  setCurrentScreen,
  setMainStory,
} = GeneralSlice.actions;

export default GeneralSlice.reducer;
