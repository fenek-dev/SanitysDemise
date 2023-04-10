import { RootState } from "@/app/store";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Locations } from "./frames/Locations";
import { Events } from "./frames/Events";

export const GameFrame = () => {
  const { currentScreen } = useSelector((state: RootState) => state.general);
  return (
    <Box height="100%" width="100%" bgcolor="black">
      {currentScreen === "locations" && <Locations />}
      {currentScreen === "event" && <Events />}
    </Box>
  );
};
