import { DIFFICULTIES } from "@/entities/maps/difficulties";
import { DevourerType } from "../type";
import cardImage from "./watcher_card.png";

export const Watcher: DevourerType = {
  name: "Watcher",
  shortDescription: "Wait for victim's death. No effects",
  cardImage,
  defaultEffects: [],
  difficulty: DIFFICULTIES.easy,
};
