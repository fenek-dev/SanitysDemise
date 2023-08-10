import { useFade } from "@/app/hooks/useFade";
import { RootState } from "@/app/store";
import { startNewGame } from "@/app/store/character/character.slice";
import {
  setCurrentScene,
  setMainStory,
} from "@/app/store/general/general.slice";
import { OpeningScene } from "@/entities/scenes/opening/opening.scene";
import { CharacterMainStory } from "@/entities/stories/types";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./RunSettings.scss";
import { Difficulties } from "./components/Difficulties";
import { Stories } from "./components/Stories";
import { StoryDescription } from "./components/StoryDescription";

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
      animate={{ opacity: 1 }}
      className="full choose-devourer-bg"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key="choose"
      transition={{ duration: 0.5 }}
    >
      <Box
        bottom="3rem"
        display="grid"
        gap="1rem"
        gridTemplateColumns="1fr 3fr 1fr"
        left="3rem"
        position="absolute"
        right="3rem"
        top="10rem"
      >
        <Stories
          name={selectedCharacter.name}
          onChoose={onChoose}
          selectedStory={mainStory!}
        />
        <StoryDescription ref={imgScope} />
        <Difficulties onGameStart={onGameStart} />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        left="3rem"
        position="absolute"
        top="3rem"
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
