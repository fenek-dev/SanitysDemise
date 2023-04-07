import { SceneType } from "../types";
import opening1 from "./bg/opening1.png";
import opening2 from "./bg/opening2.png";
import opening3 from "./bg/opening3.png";

export const OpeningScene: SceneType = {
  name: "Opening",
  stages: [
    {
      image: opening1,
      subtitle:
        "I always believed that the world was just what I could see, but I was wrong.",
    },
    {
      image: opening2,
      subtitle:
        "I found an old book filled with secrets beyond my wildest imagination.",
    },
    {
      image: opening3,
      subtitle:
        "But I didn't know what I was getting myself into until it was too late...",
    },
  ],
};
