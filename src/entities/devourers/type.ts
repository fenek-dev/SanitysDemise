import { TFunction } from "i18next";
import { DIFFICULTIES } from "../maps/difficulties";

export interface DevourerType {
  name: string;
  shortDescription: string[];
  cardImage: string;
  defaultEffects: unknown[];
  difficulty: keyof typeof DIFFICULTIES;
}
