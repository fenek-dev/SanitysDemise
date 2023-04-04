import { Box, Typography } from "@mui/material";
import { CharacterType } from "../types";
import cardImage from "./Lucian_card.png";
import { DIFFICULTIES } from "@/entities/maps/difficulties";

export const Lucian: CharacterType = {
  name: "Lucian",
  shortDescription: "Lucain",
  cardImage,
  difficulty: DIFFICULTIES.easy,
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
