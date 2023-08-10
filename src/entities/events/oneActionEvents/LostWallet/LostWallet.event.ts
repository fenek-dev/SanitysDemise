import { EVENT_STAGE_RESERVED_NAMES } from "../..";
import { EventType } from "../../types";
import stage1 from "./stage1.png";

export const LostWalletEvent: EventType = {
  chance: 3,
  name: "Strange Woman",
  stages: {
    [EVENT_STAGE_RESERVED_NAMES.START]: {
      buttons: [
        {
          action: (state) => {
            // const character = _.cloneDeep(state);
            // character.currentMainStats.sp -= 2;
            // character.currentMainStats.hp -= 1;
            return [state, EVENT_STAGE_RESERVED_NAMES.END];
          },
          text: "Take money",
        },
      ],
      description:
        "As you're walking down the street, you spot a wallet lying on the ground. Inside, you find a large sum of money. Lucky you!",
      effects: [
        {
          stat: "money",
          value: 2,
        },
      ],
      image: stage1,
      name: EVENT_STAGE_RESERVED_NAMES.START,
    },
  },
};
