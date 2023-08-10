import { useFade } from "@/app/hooks/useFade";
import { RootState } from "@/app/store";
import { setCharacter } from "@/app/store/character/character.slice";
import { setCurrentScreen } from "@/app/store/general/general.slice";
import { EVENT_STAGE_RESERVED_NAMES } from "@/entities/events";
import { EventStageButtonType } from "@/entities/events/types";
import { AnimatedText } from "@/shared/molecules/AnimatedText/AnimatedText";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import _ from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const Events = () => {
  const { t } = useTranslation();
  const character = useSelector((state: RootState) => state.character);
  const { currentEvent } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [scope, animation] = useFade();
  const [currentStage, setCurrentStage] = useState<string>(
    EVENT_STAGE_RESERVED_NAMES.START
  );

  const stage = currentEvent?.stages[currentStage];

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
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      style={{ background: "black", height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bgcolor="black"
        display="flex"
        flexDirection="column"
        height="100%"
        width="100%"
        zIndex="1000"
      >
        <Box
          sx={{
            background: `url("${stage?.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
          height="calc(100%)"
          position="relative"
          ref={scope}
          width="100%"
        >
          <Box
            bottom="2rem"
            display="flex"
            gap="2rem"
            left="2rem"
            position="absolute"
            right="2rem"
          >
            {_.map(stage?.buttons, (btn) => (
              <Button fullWidth onClick={() => onButtonClick(btn)}>
                <Typography py="1rem" variant="h5">
                  {t(btn.text)}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          color="var(--white-main-color)"
          display="flex"
          padding="2rem"
          textAlign="center"
          width="100%"
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
            speed={0.005}
            variant="h6"
          />
        </Box>
      </Box>
    </motion.div>
  );
};
