import { Box, Typography } from "@mui/material";
import { CharacterType } from "../types";
import image from "./Valtarin_bg.png";
import defaultImage from "./Valtarin_default.png";
import { DIFFICULTIES } from "@/entities/maps/difficulties";

export const Valtarin: CharacterType = {
  name: "Valtarin",
  shortDescription: ["[No Effects]"],
  image,
  difficulty: DIFFICULTIES.hell,
  defaultEffects: [],
  defaultMainStats: {
    hp: 15,
    sp: 40,
    maxHp: 15,
    maxSp: 40,
  },
  defaultSkillStats: {
    strength: 4,
    dexterity: 6,
    intelligence: 8,
    charisma: 5,
    faith: 15,
    perception: 4,
  },
  imageMap: {
    norm: defaultImage,
  },
};
