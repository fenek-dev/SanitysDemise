import _ from "lodash";
import { EVENT_STAGE_RESERVED_NAMES } from "../..";
import { EventType } from "../../types";

import stage1 from "./stage1.png";

export const LostWalletEvent: EventType = {
  name: "Strange Woman",
  chance: 3,
  stages: {
    [EVENT_STAGE_RESERVED_NAMES.START]: {
      name: EVENT_STAGE_RESERVED_NAMES.START,
      description:
        "As you're walking down the street, you spot a wallet lying on the ground. Inside, you find a large sum of money. Lucky you!",
      effects: [
        {
          value: 2,
          stat: "money",
        },
      ],
      image: stage1,
      buttons: [
        {
          text: "Take money",
          action: (state) => {
            // const character = _.cloneDeep(state);
            // character.currentMainStats.sp -= 2;
            // character.currentMainStats.hp -= 1;
            return [state, EVENT_STAGE_RESERVED_NAMES.END];
          },
        },
      ],
    },
  },
};
