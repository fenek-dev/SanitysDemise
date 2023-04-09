import React from "react";
import "./ChooseDevourer.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { Card } from "@/shared/molecules/CharacterCard/CharacterCard";
import { ALL_CHARACTERS } from "@/entities/characters";
import _ from "lodash";
import { motion } from "framer-motion";
import { ALL_DEVOURERS } from "@/entities/devourers";
import { DevourerCard } from "@/shared/molecules/DevourerCard/DevourerCard";
import { useDispatch } from "react-redux";
import { startNewGame } from "@/app/store/character/character.slice";
import { DevourerType } from "@/entities/devourers/type";
import { setCurrentScene } from "@/app/store/general/general.slice";
import { OpeningScene } from "@/entities/scenes/opening/opening.scene";
import { useTranslation } from "react-i18next";

export const ChooseDevourer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChoose = (devourer: DevourerType) => () => {
    dispatch(startNewGame(devourer));
    dispatch(setCurrentScene(OpeningScene));
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
      <Typography
        variant="h1"
        textAlign="center"
        mt="3rem"
        fontWeight="medium"
        className="stroke"
      >
        {t("Choose your devourer")}
      </Typography>
      <Box
        display="flex"
        gap="5rem"
        marginX="auto"
        padding="5rem"
        justifyContent="center"
      >
        {_.map(ALL_DEVOURERS, (devourer) => (
          <DevourerCard
            devourer={devourer}
            to="/game"
            onClick={onChoose(devourer)}
            key={devourer.name}
          >
            <Typography
              gutterBottom
              variant="h3"
              textAlign="center"
              lineHeight={0.5}
            >
              {t(devourer.name)}
            </Typography>
            <Typography variant="body1" fontSize="1.4rem" lineHeight={1}>
              {_.map(devourer.shortDescription, (desc) => t(desc))}
            </Typography>
          </DevourerCard>
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
        <Link to="/character">
          <Button>{t("Back")}</Button>
        </Link>
      </Box>
    </motion.div>
  );
};
