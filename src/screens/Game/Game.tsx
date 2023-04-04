import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export const Game = () => {
  return (
    <motion.div
      className="full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Grid
        className="full"
        container
        display="grid"
        gridTemplateColumns="10fr 2fr"
        gridTemplateRows="1fr 13fr 3fr"
        gridTemplateAreas={`"toolbar toolbar"
          "main sidebar"
          "content sidebar"`}
      >
        <Grid gridArea="toolbar">hello</Grid>
        <Grid gridArea="main">hello</Grid>
        <Grid gridArea="sidebar">hello</Grid>
        <Grid gridArea="content">hello</Grid>
      </Grid>
    </motion.div>
  );
};
