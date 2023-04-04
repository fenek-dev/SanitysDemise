import { CharacterType } from "@/entities/characters/types";
import { DevourerType } from "@/entities/devourers/type";
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
  to: string;
  devourer: DevourerType;
}

export const DevourerCard = ({
  children,
  devourer,
  to,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <Link to={to}>
      <CardComponent
        sx={{ width: "20rem", cursor: "pointer", position: "relative" }}
      >
        <CardMedia sx={{ height: "30rem" }} image={devourer.cardImage} />
        <CardContent
          sx={{
            padding: "1rem",
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
          <Box mt="1rem">{children}</Box>
          <Box mt="auto">{DIFFICULTIES_MAP[devourer.difficulty]}</Box>
        </CardContent>
      </CardComponent>
    </Link>
  );
};
