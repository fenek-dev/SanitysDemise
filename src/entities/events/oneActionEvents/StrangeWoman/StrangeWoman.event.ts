import _ from "lodash";
import { EVENT_STAGE_RESERVED_NAMES } from "../..";
import { EventType } from "../../types";

import stage1 from "./stage1.png";

export const StrangeWomanEvent: EventType = {
  name: "Strange Woman",
  chance: 5,
  stages: {
    [EVENT_STAGE_RESERVED_NAMES.START]: {
      name: EVENT_STAGE_RESERVED_NAMES.START,
      description:
        'A woman with long, tangled hair and a tattered dress approaches you, asking for help. As you get closer, you realize that her eyes are empty, and she has no face. You try to run, but she grabs your arm, whispers "You can\'t escape." and disappears.',
      effects: [
        {
          value: -2,
          stat: "sp",
        },
        {
          value: -1,
          stat: "hp",
        },
      ],
      image: stage1,
      buttons: [
        {
          text: "Oh, fuck...",
          action: (state) => {
            const character = _.cloneDeep(state);
            character.currentMainStats.sp -= 2;
            character.currentMainStats.hp -= 1;
            return [character, EVENT_STAGE_RESERVED_NAMES.END];
          },
        },
      ],
    },
  },
};
