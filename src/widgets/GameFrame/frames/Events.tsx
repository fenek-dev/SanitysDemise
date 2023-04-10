import { RootState } from "@/app/store";
import { setCharacter } from "@/app/store/character/character.slice";
import {
  changeLocation,
  setCurrentScreen,
} from "@/app/store/general/general.slice";
import { EVENT_STAGE_RESERVED_NAMES } from "@/entities/events";
import { EventStageButtonType } from "@/entities/events/types";
import { ALL_LOCATIONS, LOCATION_NAMES } from "@/entities/locations";
import { LocationType } from "@/entities/locations/types";
import { AnimatedText } from "@/shared/molecules/AnimatedText/AnimatedText";
import { LocationsGrid } from "@/shared/molecules/LocationsGrid/LocationsGrid";
import { Box, Button, Typography } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import _ from "lodash";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const Events = () => {
  const { t } = useTranslation();
  const character = useSelector((state: RootState) => state.character);
  const { currentEvent } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();
  const [currentStage, setCurrentStage] = useState<string>(
    EVENT_STAGE_RESERVED_NAMES.START
  );

  const stage = currentEvent?.stages[currentStage];

  const animation = async (cb: Function) => {
    await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
    cb();
    await animate(scope.current, { opacity: 1 }, { duration: 0.2 });
  };

  const onButtonClick = (btn: EventStageButtonType) => {
    animation(() => {
      const [newState, nextStage] = btn.action(character);
      dispatch(setCharacter(newState));
      if (nextStage === EVENT_STAGE_RESERVED_NAMES.END) {
        dispatch(setCurrentScreen("locations"));
      } else {
        setCurrentStage(nextStage);
      }
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: "black", height: "100%", width: "100%" }}
    >
      <Box
        zIndex="1000"
        display="flex"
        flexDirection="column"
        bgcolor="black"
        height="100%"
        width="100%"
      >
        <Box
          height="calc(100%)"
          width="100%"
          ref={scope}
          sx={{
            background: `url("${stage?.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
          position="relative"
        >
          <Box
            display="flex"
            gap="2rem"
            position="absolute"
            bottom="2rem"
            left="2rem"
            right="2rem"
          >
            {_.map(stage?.buttons, (btn) => (
              <Button onClick={() => onButtonClick(btn)} fullWidth>
                <Typography variant="h5" py="1rem">
                  {t(btn.text)}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          width="100%"
          padding="2rem"
          color="var(--white-main-color)"
          display="flex"
          textAlign="center"
        >
          <AnimatedText
            text={`${t(stage?.description || "")}↵${_.map(
              stage?.effects,
              (effect) =>
                `(${t(effect.stat, {
                  count: Math.abs(effect.value),
                  sign: effect.value > 0 ? "+" : "-",
                })})`
            ).join("")}`}
            variant="h6"
            speed={0.005}
          />
        </Box>
      </Box>
    </motion.div>
  );
};
