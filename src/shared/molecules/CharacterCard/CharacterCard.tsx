import { CharacterType } from "@/entities/characters/types";
import { STATS_MAP } from "@/entities/maps";
import { DIFFICULTIES_MAP } from "@/entities/maps/difficulties";
import {
  Box,
  Card as CardComponent,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface CardProps {
  character: CharacterType;
  onClick?: () => void;
}

export const CharacterCard = ({
  character,
  children,
}: React.PropsWithChildren<CardProps>) => {
  const { t } = useTranslation();

  return (
    <CardComponent
      sx={{
        background: "none !important",
        position: "relative",
        width: "20rem",
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "var(--main-color)",
          color: "var(--white-main-color) !important",
          display: "flex",
          flexDirection: "column",
          fontFamily: "RussoOne !important",
          opacity: 0.8,
          padding: "1rem !important",
          transition: "0.3s",
        }}
      >
        <Typography
          gutterBottom
          lineHeight={0.5}
          textAlign="center"
          variant="h3"
        >
          {t(character.name)}
        </Typography>
        <Box
          className="russo"
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          justifyContent="space-between"
          padding="0"
          width="100%"
          zIndex="2"
        >
          {_.map(
            _.entries(character.defaultSkillStats),
            ([statname, stat], index) => {
              const firstCol = (index & 1) === 0;
              return (
                <Box
                  alignItems="center"
                  borderRight="0"
                  display="flex"
                  flexDirection={firstCol ? "row-reverse" : "row"}
                  gap="0.5rem"
                  justifyContent="flex-end"
                  margin="0 !important"
                >
                  <Tooltip
                    disableInteractive
                    title={t(STATS_MAP[statname].desc)}
                  >
                    <Typography
                      display="inline-block"
                      sx={{ textDecoration: "underline" }}
                      variant="button"
                    >
                      {t(STATS_MAP[statname].short)}
                    </Typography>
                  </Tooltip>
                  <span className="russo">{stat}</span>
                </Box>
              );
            }
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="0 !important"
          marginTop="1rem"
          padding="0"
          position="absolute"
          top="4rem"
          width="100%"
          zIndex="1"
        >
          {_.map(
            _.dropRight(_.entries(character.defaultMainStats), 2),
            ([statname, stat], index) => (
              <Box
                borderRight="0"
                className="russo"
                lineHeight={1}
                margin="0 !important"
                sx={{ transform: "translateX(-12px)" }}
                textAlign="center"
                textTransform="uppercase"
              >
                <span>
                  <span
                    style={{
                      color:
                        index === 0 ? "var(--hp-color)" : "var(--sp-color)",
                      fontSize: "3rem",
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
        <Box
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          mt="1rem"
          textAlign="center"
        >
          {children}
        </Box>
        <Box mt="4rem">{DIFFICULTIES_MAP(t)[character.difficulty]}</Box>
      </CardContent>
    </CardComponent>
  );
};
