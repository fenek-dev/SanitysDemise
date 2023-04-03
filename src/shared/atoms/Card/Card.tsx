import { CharacterType } from "@/entities/characters/types";
import {
  Box,
  Button,
  CardActions,
  Card as CardComponent,
  CardContent,
  CardMedia,
} from "@mui/material";
import _ from "lodash";
import React from "react";

interface CardProps {
  character: CharacterType;
}

export const Card = ({
  children,
  character,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <CardComponent sx={{ width: "20rem", cursor: "pointer" }}>
      <CardMedia sx={{ height: "20rem" }} image={character.image} />
      <CardContent>{children}</CardContent>
      <CardActions
        sx={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(6, 1fr)"
          padding="0"
          width="100%"
        >
          {_.map(_.entries(character.defaultStats), ([_statname, stat]) => (
            <Box
              textAlign="center"
              border="0.2rem solid var(--main-color)"
              margin="0 !important"
              borderRight="0"
            >
              {stat}
            </Box>
          ))}
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          padding="0"
          margin="0 !important"
          width="100%"
        >
          {_.map(_.entries(character.defaultMainStats), ([statname, stat]) => (
            <Box
              textAlign="center"
              border="0.2rem solid var(--main-color)"
              margin="0 !important"
              textTransform="uppercase"
              borderRight="0"
            >
              <span>{statname}</span>
              {stat}
            </Box>
          ))}
        </Box>
      </CardActions>
    </CardComponent>
  );
};
