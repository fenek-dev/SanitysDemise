import _ from "lodash";
import { EVENT_STAGE_RESERVED_NAMES } from "../..";
import { EventType } from "../../types";

import stage1 from "./stage1.png";

export const AbandonedAlleyEvent: EventType = {
  name: "The Abandoned Alley",
  chance: 10,
  stages: {
    [EVENT_STAGE_RESERVED_NAMES.START]: {
      name: EVENT_STAGE_RESERVED_NAMES.START,
      description:
        "You find yourself in a dark alley, with the smell of blood in the air. You see a figure lurking in the shadows, but when you try to approach it, it disappears. You hear the sound of something dragging on the ground, and when you turn around, you see a trail of blood leading away from you.",
      effects: [
        {
          value: -2,
          stat: "sp",
        },
      ],
      image: stage1,
      buttons: [
        {
          text: "Run away",
          action: (state) => {
            const character = _.cloneDeep(state);
            character.currentMainStats.sp -= 2;
            return [character, EVENT_STAGE_RESERVED_NAMES.END];
          },
        },
      ],
    },
  },
};
