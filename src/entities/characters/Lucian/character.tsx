import { Box, Typography } from "@mui/material";
import { CharacterType } from "../types";
import cardImage from "./Lucian_card.png";

export const Lucian: CharacterType = {
  name: "Lucian",
  shortDescription: (
    <Box>
      <Typography variant="h4" textAlign="center" color="var(--easy-color)">
        [Easy]
      </Typography>
    </Box>
  ),
  cardImage,
  defaultEffects: [],
  defaultMainStats: {
    hp: 30,
    sp: 30,
  },
  defaultStats: {
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    charisma: 10,
    faith: 10,
    perception: 10,
  },
};
