import { Avatar } from "@/widgets/Avatar/Avatar";
import { Panel } from "@/widgets/Panel/Panel";
import { Scenes } from "@/widgets/Scenes/Scenes";
import { Sidebar } from "@/widgets/Sidebar/Sidebar";
import { Toolbar } from "@/widgets/Toolbar/Toolbar";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export const Game = () => {
  return (
    <>
      <motion.div
        className="full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Grid
          className="full"
          container
          display="grid"
          gridTemplateColumns="10fr calc(16rem + 6px)"
          gridTemplateRows="1fr 16fr"
          gridTemplateAreas={`"toolbar toolbar"
          "main sidebar"`}
        >
          <Grid gridArea="toolbar">
            <Toolbar />
          </Grid>
          <Grid gridArea="main">hello</Grid>
          <Grid
            gridArea="sidebar"
            bgcolor="rgba(0, 0, 0, 0.6)"
            border="3px solid var(--main-color)"
            borderTop="none"
            display="flex"
            flexDirection="column"
          >
            <Sidebar />
            <Avatar />
          </Grid>
        </Grid>
      </motion.div>
      <Scenes />
    </>
  );
};
