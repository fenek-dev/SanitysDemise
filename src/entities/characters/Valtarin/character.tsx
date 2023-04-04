import { Box, Typography } from "@mui/material";
import { CharacterType } from "../types";
import cardImage from "./Valtarin_card.png";
import { DIFFICULTIES } from "@/entities/maps/difficulties";

export const Valtarin: CharacterType = {
  name: "Valtarin",
  shortDescription: "Valtarin",
  cardImage,
  difficulty: DIFFICULTIES.hell,
  defaultEffects: [],
  defaultMainStats: {
    hp: 15,
    sp: 40,
  },
  defaultStats: {
    strength: 4,
    dexterity: 6,
    intelligence: 8,
    charisma: 5,
    faith: 15,
    perception: 4,
  },
};
