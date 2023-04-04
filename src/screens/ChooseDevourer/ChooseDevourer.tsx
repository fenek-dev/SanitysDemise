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

export const ChooseDevourer = () => {
  return (
    <motion.div
      className="full choose-devourer-bg"
      key="choose"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h1" textAlign="center" mt="3rem" fontWeight="medium">
        Choose your devourer
      </Typography>
      <Box
        display="flex"
        gap="5rem"
        marginX="auto"
        padding="5rem"
        justifyContent="center"
      >
        {_.map(ALL_DEVOURERS, (devourer) => (
          <DevourerCard devourer={devourer} to="/">
            <Typography
              gutterBottom
              variant="h3"
              textAlign="center"
              lineHeight={0.5}
            >
              {devourer.name}
            </Typography>
            <Typography variant="body1" fontSize="1.4rem" lineHeight={1}>
              {devourer.shortDescription}
            </Typography>
          </DevourerCard>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        top="5rem"
        left="3rem"
      >
        <Link to="/character">
          <Button>Back</Button>
        </Link>
      </Box>
    </motion.div>
  );
};
