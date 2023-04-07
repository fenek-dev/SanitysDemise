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
  Typography,
} from "@mui/material";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface CardProps {
  character: CharacterType;
  to: string;
  onClick?: () => void;
}

export const CharacterCard = ({
  children,
  character,
  onClick,
  to,
}: React.PropsWithChildren<CardProps>) => {
  const { t } = useTranslation();

  return (
    <Link to={to} onClick={onClick}>
      <CardComponent
        sx={{
          width: "20rem",
          cursor: "pointer",
          position: "relative",
          transform: "scale(1)",
          transition: "0.3s ease-out",
          ":hover": {
            transform: "scale(1.2)",
          },
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
              _.entries(character.defaultSkillStats),
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
                    <Typography variant="button">
                      {t(STATS_MAP[statname].short)}
                    </Typography>
                    <span className="russo">{stat}</span>
                  </Box>
                );
              }
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            padding="0"
            marginLeft="0 !important"
            marginTop="1rem"
            width="100%"
            position="absolute"
            top="1rem"
          >
            {_.map(
              _.dropRight(_.entries(character.defaultMainStats), 2),
              ([statname, stat], index) => (
                <Box
                  textAlign="center"
                  margin="0 !important"
                  textTransform="uppercase"
                  borderRight="0"
                  className="russo"
                  sx={{ transform: "translateX(-12px)" }}
                  lineHeight={1}
                >
                  <span>
                    <span
                      style={{
                        fontSize: "3rem",
                        color:
                          index === 0 ? "var(--hp-color)" : "var(--sp-color)",
                      }}
                    >
                      {stat}
                    </span>
                    <Typography variant="caption">{statname}</Typography>
                  </span>
                </Box>
              )
            )}
          </Box>
          <Box mt="1rem" textAlign="center">
            {children}
          </Box>
          <Box mt="auto">{DIFFICULTIES_MAP(t)[character.difficulty]}</Box>
        </CardContent>
      </CardComponent>
    </Link>
  );
};
