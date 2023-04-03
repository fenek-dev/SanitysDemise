import React from "react";
import "./ChooseCharacter.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "@/shared/atoms/Card/Card";
import { ALL_CHARACTERS } from "@/entities/characters";
import _ from "lodash";

export const ChooseCharacter = () => {
  return (
    <Box className="full choose-character-bg">
      <Box
        display="flex"
        gap="5rem"
        marginX="auto"
        padding="5rem"
        justifyContent="center"
      >
        {_.map(ALL_CHARACTERS, (character) => (
          <Card character={character}>
            <Typography
              gutterBottom
              variant="h3"
              textAlign="center"
              lineHeight={0.5}
            >
              {character.name}
            </Typography>
            <Typography variant="body1" fontSize="1.4rem" lineHeight={1}>
              {character.shortDescription}
            </Typography>
          </Card>
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Box>
    </Box>
  );
};
