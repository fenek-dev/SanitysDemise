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
  children,
  character,
}: React.PropsWithChildren<CardProps>) => {
  const { t } = useTranslation();

  return (
    <CardComponent
      sx={{
        width: "20rem",
        position: "relative",
        background: "none !important",
      }}
    >
      <CardContent
        sx={{
          padding: "1rem !important",
          display: "flex",
          flexDirection: "column",
          color: "var(--white-main-color) !important",
          fontFamily: "RussoOne !important",
          backgroundColor: "var(--main-color)",
          transition: "0.3s",
          opacity: 0.8,
        }}
      >
        <Typography
          gutterBottom
          variant="h3"
          textAlign="center"
          lineHeight={0.5}
        >
          {t(character.name)}
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          justifyContent="space-between"
          padding="0"
          width="100%"
          className="russo"
          zIndex="2"
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
                  <Tooltip
                    title={t(STATS_MAP[statname].desc)}
                    disableInteractive
                  >
                    <Typography
                      variant="button"
                      sx={{ textDecoration: "underline" }}
                      display="inline-block"
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
          padding="0"
          marginLeft="0 !important"
          marginTop="1rem"
          width="100%"
          position="absolute"
          top="4rem"
          zIndex="1"
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
        <Box
          mt="1rem"
          textAlign="center"
          display="flex"
          flexDirection="column"
          gap="0.5rem"
        >
          {children}
        </Box>
        <Box mt="4rem">{DIFFICULTIES_MAP(t)[character.difficulty]}</Box>
      </CardContent>
    </CardComponent>
  );
};
