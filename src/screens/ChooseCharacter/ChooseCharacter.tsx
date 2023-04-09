import React from "react";
import "./ChooseCharacter.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CharacterCard } from "@/shared/molecules/CharacterCard/CharacterCard";
import { ALL_CHARACTERS } from "@/entities/characters";
import _ from "lodash";
import { motion, useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CharacterType } from "@/entities/characters/types";
import { chooseCharacter } from "@/app/store/character/character.slice";
import { useTranslation } from "react-i18next";
import { RootState } from "@/app/store";
import { setMainStory } from "@/app/store/general/general.slice";
import { ALL_STORIES } from "@/entities/stories";
import { ITEM_RARITY_COLOR } from "@/entities/items";

export const ChooseCharacter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedCharacter } = useSelector(
    (state: RootState) => state.character
  );
  const [scope, animate] = useAnimate();

  const onChoose = (character: CharacterType) => () => {
    const animation = async () => {
      await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
      dispatch(chooseCharacter(character));
      await animate(
        scope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 0.2 }
      );
    };
    animation();
  };

  return (
    <motion.div
      className="full choose-character-bg"
      key="choose"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        className="full"
        sx={{
          background: `url("${selectedCharacter.image}") center center no-repeat`,
          backgroundSize: "cover",
        }}
        ref={scope}
      >
        <Box position="absolute" top="3rem" right="3rem">
          <CharacterCard character={selectedCharacter}>
            {_.map(selectedCharacter.defaultItems, (item) => (
              <Typography
                variant="body1"
                fontSize="1.5rem"
                lineHeight={1}
                color={ITEM_RARITY_COLOR[item.rarity]}
              >
                [{t(item.name)}]
              </Typography>
            ))}
            <Typography variant="body1" fontSize="1.4rem" lineHeight={1}>
              {_.map(selectedCharacter.shortDescription, (desc) => t(desc))}
            </Typography>
          </CharacterCard>
        </Box>

        <Box position="absolute" bottom="3rem" right="3rem">
          <Link to="/run_settings">
            <Button
              onClick={() =>
                dispatch(setMainStory(ALL_STORIES[selectedCharacter.name][0]))
              }
            >
              {t("Select")}
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        position="absolute"
        bottom="1rem"
        left="50%"
        display="flex"
        gap="1rem"
        sx={{ transform: "translateX(-50%)" }}
      >
        {_.map(ALL_CHARACTERS, (character) => (
          <Button
            className="img-button"
            variant="outlined"
            onClick={onChoose(character)}
            data-checked={selectedCharacter.name === character.name}
            sx={{
              ":before": {
                background: `url("${character.image}") center center no-repeat`,
                backgroundSize: "cover",
              },
            }}
          >
            <Typography variant="h4" className="img-button-text">
              {t(character.name)}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        top="3rem"
        left="3rem"
        zIndex="10"
      >
        <Link to="/">
          <Button>{t("Back")}</Button>
        </Link>
      </Box>
    </motion.div>
  );
};
