import { DIFFICULTIES } from "@/entities/maps/difficulties";
import { DevourerType } from "../type";
import cardImage from "./watcher_card.png";

export const Watcher: DevourerType = {
  name: "Watcher",
  shortDescription: ["[No Effects]"],
  cardImage,
  defaultEffects: [],
  difficulty: DIFFICULTIES.easy,
};
