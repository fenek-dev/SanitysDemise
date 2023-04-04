import { Box, Typography } from "@mui/material";
import { CharacterType } from "../types";
import cardImage from "./Lucian_card.png";
import defaultImage from "./Lucian_default.png";
import { DIFFICULTIES } from "@/entities/maps/difficulties";

export const Lucian: CharacterType = {
  name: "Lucian",
  shortDescription: "[No Effects]",
  cardImage,
  difficulty: DIFFICULTIES.easy,
  defaultEffects: [],
  defaultMainStats: {
    hp: 30,
    sp: 30,
    maxHp: 30,
    maxSp: 30,
  },
  defaultSkillStats: {
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    charisma: 10,
    faith: 10,
    perception: 10,
  },
  imageMap: {
    norm: defaultImage,
  },
};
