import { BasicMainStats, CharacterType } from "@/entities/characters/types";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./Avatar.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export const Avatar = () => {
  const { selectedCharacter, currentMainStats } = useSelector(
    (state: RootState) => state.character
  );

  return (
    <Box
      color="var(--white-main-color)"
      borderTop="3px solid var(--main-color)"
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" textAlign="center">
        <Box borderRight="2px solid var(--main-color)" className="hp-bg">
          <span className="main-stat hp">{currentMainStats.hp}</span>
          <Typography variant="caption">hp</Typography>
        </Box>
        <Box className="sp-bg">
          <span className="main-stat sp">{currentMainStats.sp}</span>
          <Typography variant="caption">sp</Typography>
        </Box>
      </Box>
      <Card
        sx={{
          width: "16rem",
          height: "16rem",
          position: "relative",
          border: "none !important",
          borderTop: "2px solid var(--main-color) !important",
          borderRadius: "0 !important",
          background: "none !important",
          boxShadow: "none !important",
        }}
      >
        <CardMedia
          sx={{ height: "16rem", width: "16rem" }}
          image={selectedCharacter.imageMap.norm}
        />
      </Card>
    </Box>
  );
};
