import { RootState } from "@/app/store";
import { Avatar } from "@/shared/atoms/Avatar/Avatar";
import { Box, Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const Panel = () => {
  const { selectedCharacter, currentMainStats } = useSelector(
    (state: RootState) => state.character
  );

  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-end">
      <Box
        height="16rem"
        width="100%"
        bgcolor="rgba(0, 0, 0, 0.6)"
        border="3px solid var(--main-color)"
      ></Box>
      <Avatar
        character={selectedCharacter}
        currentMainStats={currentMainStats}
      />
    </Box>
  );
};
