import React from "react";
import "./RunSettings.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { Card } from "@/shared/molecules/CharacterCard/CharacterCard";
import { ALL_CHARACTERS } from "@/entities/characters";
import _ from "lodash";
import { motion } from "framer-motion";
import { DevourerCard } from "@/shared/molecules/DevourerCard/DevourerCard";
import { useDispatch, useSelector } from "react-redux";
import { startNewGame } from "@/app/store/character/character.slice";
import {
  setCurrentScene,
  setMainStory,
} from "@/app/store/general/general.slice";
import { OpeningScene } from "@/entities/scenes/opening/opening.scene";
import { useTranslation } from "react-i18next";
import { RootState } from "@/app/store";
import { ALL_STORIES } from "@/entities/stories";
import { Stories } from "./components/Stories";
import { CharacterMainStory } from "@/entities/stories/types";

export const RunSettings = () => {
  const { selectedCharacter } = useSelector(
    (state: RootState) => state.character
  );
  const { mainStory } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onGameStart = () => {
    dispatch(startNewGame());
    dispatch(setCurrentScene(OpeningScene));
  };

  const onChoose = (story: CharacterMainStory) => {
    dispatch(setMainStory(story));
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
      <Box position="absolute" top="10rem" left="3rem" bottom="3rem">
        <Stories
          name={selectedCharacter.name}
          selectedStory={mainStory!}
          onChoose={onChoose}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        bottom="3rem"
        right="3rem"
        zIndex="10"
        onClick={onGameStart}
      >
        <Link to="/game">
          <Button>{t("Start game")}</Button>
        </Link>
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
          <Button>{t("Back")}</Button>
        </Link>
      </Box>
    </motion.div>
  );
};
