import { Locations } from "@/screens/Game/frames/Locations/Locations";
import { Scenes } from "@/widgets/Scenes/Scenes";
import { Toolbar } from "@/widgets/Toolbar/Toolbar";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Events } from "./frames/Events";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export const Game = () => {
  const { currentScreen } = useSelector((state: RootState) => state.general);
  return (
    <>
      <motion.div
        className="full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Toolbar />
        <Box height="calc(100% - 3rem)" width="100%" bgcolor="black">
          {currentScreen === "locations" && <Locations />}
          {currentScreen === "event" && <Events />}
        </Box>
        {/* <Grid
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
          <Grid gridArea="main">
            <GameFrame />
          </Grid>
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
        </Grid> */}
      </motion.div>
      <Scenes />
    </>
  );
};
