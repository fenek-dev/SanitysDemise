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
      border="2px solid var(--main-color)"
      mt="auto"
      width="100%"
    >
      <Card
        sx={{
          width: "100%",
          aspectRatio: "1",
          position: "relative",
          border: "none !important",
          borderRadius: "0 !important",
          background: "none !important",
          boxShadow: "none !important",
        }}
      >
        <CardMedia
          sx={{ width: "100%", aspectRatio: "1" }}
          image={selectedCharacter.imageMap.norm}
        />
      </Card>

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
    </Box>
  );
};
