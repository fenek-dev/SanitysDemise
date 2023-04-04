import { CharacterType } from "@/entities/characters/types";
import { STATS_MAP } from "@/entities/maps";
import { DIFFICULTIES_MAP } from "@/entities/maps/difficulties";
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
import { Link } from "react-router-dom";

interface CardProps {
  character: CharacterType;
  to: string;
}

export const CharacterCard = ({
  children,
  character,
  to,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <Link to={to}>
      <CardComponent
        sx={{
          width: "20rem",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <CardMedia sx={{ height: "30rem" }} image={character.cardImage} />
        <CardContent
          sx={{
            padding: "1rem !important",
            display: "flex",
            flexDirection: "column",
            color: "var(--white-main-color) !important",
            fontFamily: "RussoOne !important",
            position: "absolute",
            inset: "0 0 0 0",
            backgroundColor: "var(--main-color)",
            transition: "0.3s",
            opacity: 0,
            ":hover": {
              opacity: 0.9,
              backgroundColor: "var(--main-color)",
            },
          }}
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            justifyContent="space-between"
            padding="0"
            width="100%"
            className="russo"
          >
            {_.map(
              _.entries(character.defaultStats),
              ([statname, stat], index) => {
                const firstCol = (index & 1) === 0;
                return (
                  <Box
                    display="flex"
                    flexDirection={firstCol ? "row-reverse" : "row"}
                    justifyContent="flex-end"
                    alignItems="center"
                    gap="0.5rem"
                    margin="0 !important"
                    borderRight="0"
                  >
                    <span style={{ fontSize: "1.5rem" }}>
                      {STATS_MAP[statname].short}
                    </span>{" "}
                    <span className="russo">{stat}</span>
                  </Box>
                );
              }
            )}
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            padding="0"
            marginLeft="0 !important"
            marginTop="1rem"
            width="100%"
          >
            {_.map(
              _.entries(character.defaultMainStats),
              ([statname, stat]) => (
                <Box
                  textAlign="center"
                  margin="0 !important"
                  textTransform="uppercase"
                  borderRight="0"
                  className="russo"
                >
                  <span>{statname}</span> {stat}
                </Box>
              )
            )}
          </Box>
          <Box mt="1rem">{children}</Box>
          <Box mt="auto">{DIFFICULTIES_MAP[character.difficulty]}</Box>
        </CardContent>
      </CardComponent>
    </Link>
  );
};
