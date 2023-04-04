import { RootState } from "@/app/store";
import { Avatar } from "@/shared/atoms/Avatar/Avatar";
import { Box, Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { selectedCharacter, currentMainStats } = useSelector(
    (state: RootState) => state.character
  );
  console.log(selectedCharacter.imageMap.norm);

  return (
    <Box
      color="var(--white-main-color)"
      display="flex"
      flexDirection="column"
      height="100%"
      border="3px solid var(--main-color)"
    >
      <Avatar
        character={selectedCharacter}
        currentMainStats={currentMainStats}
      />
    </Box>
  );
};
