import { BasicMainStats, CharacterType } from "@/entities/characters/types";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

interface AvatarProps {
  character: CharacterType;
  currentMainStats: BasicMainStats;
}

export const Avatar = ({ character, currentMainStats }: AvatarProps) => {
  console.log(character);

  return (
    <Box mt="auto">
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        textAlign="center"
        borderTop="2px solid var(--main-color)"
      >
        <Box borderRight="2px solid var(--main-color)">
          <span style={{ color: "var(--hp-color)" }}>
            {currentMainStats.hp}
          </span>
          <Typography variant="caption">hp</Typography>
        </Box>
        <Box>
          <span style={{ color: "var(--sp-color)" }}>
            {currentMainStats.sp}
          </span>
          <Typography variant="caption">sp</Typography>
        </Box>
      </Box>
      <Card
        sx={{
          width: "16rem",
          height: "16rem",
          position: "relative",
          border: "2px solid var(--main-color) !important",
          borderRadius: "0 !important",
          background: "none !important",
          boxShadow: "none !important",
          borderLeft: "0 !important",
        }}
      >
        <CardMedia
          sx={{ height: "16rem", width: "16rem" }}
          image={character.imageMap.norm}
        />
      </Card>
    </Box>
  );
};
