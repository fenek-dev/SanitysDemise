import { useFade } from "@/app/hooks/useFade";
import { RootState } from "@/app/store";
import { chooseCharacter } from "@/app/store/character/character.slice";
import { setMainStory } from "@/app/store/general/general.slice";
import { ALL_CHARACTERS } from "@/entities/characters";
import { CharacterType } from "@/entities/characters/types";
import { ITEM_RARITY_COLOR } from "@/entities/items";
import { ALL_STORIES } from "@/entities/stories";
import { CharacterCard } from "@/shared/molecules/CharacterCard/CharacterCard";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ChooseCharacter.scss";

export const ChooseCharacter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedCharacter } = useSelector(
    (state: RootState) => state.character
  );
  const [scope, animation] = useFade();

  const onChoose = (character: CharacterType) => () => {
    animation(() => dispatch(chooseCharacter(character)));
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="full choose-character-bg"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key="choose"
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          background: `url("${selectedCharacter.image}") center center no-repeat`,
          backgroundSize: "cover",
        }}
        className="full"
        ref={scope}
      >
        <Box position="absolute" right="3rem" top="3rem">
          <CharacterCard character={selectedCharacter}>
            {_.map(selectedCharacter.defaultItems, (item) => (
              <Typography
                color={ITEM_RARITY_COLOR[item.rarity]}
                fontSize="1.5rem"
                lineHeight={1}
                variant="body1"
              >
                [{t(item.name)}]
              </Typography>
            ))}
            <Typography fontSize="1.4rem" lineHeight={1} variant="body1">
              {_.map(selectedCharacter.shortDescription, (desc) => t(desc))}
            </Typography>
          </CharacterCard>
        </Box>

        <Box bottom="3rem" position="absolute" right="3rem">
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
        bottom="1rem"
        display="flex"
        gap="1rem"
        left="50%"
        position="absolute"
        sx={{ transform: "translateX(-50%)" }}
      >
        {_.map(ALL_CHARACTERS, (character) => (
          <Button
            sx={{
              ":before": {
                background: `url("${character.image}") center center no-repeat`,
                backgroundSize: "cover",
              },
            }}
            className="img-button"
            data-checked={selectedCharacter.name === character.name}
            key={character.name}
            onClick={onChoose(character)}
            variant="outlined"
          >
            <Typography className="img-button-text" variant="h4">
              {t(character.name)}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        left="3rem"
        position="absolute"
        top="3rem"
        zIndex="10"
      >
        <Link to="/">
          <Button>{t("Back")}</Button>
        </Link>
      </Box>
    </motion.div>
  );
};
