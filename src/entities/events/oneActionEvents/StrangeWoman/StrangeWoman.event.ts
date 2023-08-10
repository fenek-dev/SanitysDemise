import _ from "lodash";

import { EVENT_STAGE_RESERVED_NAMES } from "../..";
import { EventType } from "../../types";
import stage1 from "./stage1.png";

export const StrangeWomanEvent: EventType = {
  chance: 5,
  name: "Strange Woman",
  stages: {
    [EVENT_STAGE_RESERVED_NAMES.START]: {
      buttons: [
        {
          action: (state) => {
            const character = _.cloneDeep(state);
            character.currentMainStats.sp -= 2;
            character.currentMainStats.hp -= 1;
            return [character, EVENT_STAGE_RESERVED_NAMES.END];
          },
          text: "Oh, fuck...",
        },
      ],
      description:
        'A woman with long, tangled hair and a tattered dress approaches you, asking for help. As you get closer, you realize that her eyes are empty, and she has no face. You try to run, but she grabs your arm, whispers "You can\'t escape." and disappears.',
      effects: [
        {
          stat: "sp",
          value: -2,
        },
        {
          stat: "hp",
          value: -1,
        },
      ],
      image: stage1,
      name: EVENT_STAGE_RESERVED_NAMES.START,
    },
  },
};
