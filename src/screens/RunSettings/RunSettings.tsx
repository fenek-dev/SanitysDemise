import React from "react";
import "./RunSettings.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import _ from "lodash";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { startNewGame } from "@/app/store/character/character.slice";
import {
  setCurrentScene,
  setMainStory,
} from "@/app/store/general/general.slice";
import { OpeningScene } from "@/entities/scenes/opening/opening.scene";
import { useTranslation } from "react-i18next";
import { RootState } from "@/app/store";
import { Stories } from "./components/Stories";
import { CharacterMainStory } from "@/entities/stories/types";
import { useFade } from "@/app/hooks/useFade";
import { StoryDescription } from "./components/StoryDescription";
import { Difficulties } from "./components/Difficulties";

export const RunSettings = () => {
  const { selectedCharacter } = useSelector(
    (state: RootState) => state.character
  );
  const { mainStory } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [imgScope, animation] = useFade();

  const onGameStart = () => {
    dispatch(startNewGame());
    dispatch(setCurrentScene(OpeningScene));
  };

  const onChoose = (story: CharacterMainStory) => {
    animation(() => dispatch(setMainStory(story)));
  };
  return (
    <motion.div
      className="full choose-devourer-bg"
      key="choose"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        position="absolute"
        top="10rem"
        left="3rem"
        bottom="3rem"
        right="3rem"
        display="grid"
        gridTemplateColumns="1fr 3fr 1fr"
        gap="1rem"
      >
        <Stories
          name={selectedCharacter.name}
          selectedStory={mainStory!}
          onChoose={onChoose}
        />
        <StoryDescription ref={imgScope} />
        <Difficulties onGameStart={onGameStart} />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        top="3rem"
        left="3rem"
        zIndex="10"
      >
        <Link to="/character">
          <Button>
            <Typography variant="h4">{t("Back")}</Typography>
          </Button>
        </Link>
      </Box>
    </motion.div>
  );
};
