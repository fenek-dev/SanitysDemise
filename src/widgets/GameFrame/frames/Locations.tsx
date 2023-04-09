import { RootState } from "@/app/store";
import { changeLocation } from "@/app/store/general/general.slice";
import { ALL_LOCATIONS, LOCATION_NAMES } from "@/entities/locations";
import { LocationType } from "@/entities/locations/types";
import { LocationsGrid } from "@/shared/molecules/LocationsGrid/LocationsGrid";
import { Box } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Locations = () => {
  const { currentLocation } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();

  const onChangeLocation = async (loc: LOCATION_NAMES) => {
    const animation = async () => {
      await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
      dispatch(changeLocation(loc));
      await animate(scope.current, { opacity: 1 }, { duration: 0.2 });
    };
    animation();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: "black", height: "100%", width: "100%" }}
    >
      <Box
        zIndex="1000"
        display="flex"
        flexDirection="column"
        bgcolor="black"
        height="100%"
        width="100%"
      >
        <Box
          height="calc(100% - 15rem)"
          width="100%"
          ref={scope}
          sx={{
            background: `url("${currentLocation.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
        />
        <Box
          height="15rem"
          width="100%"
          padding="2rem"
          color="var(--white-main-color)"
          display="flex"
        >
          <LocationsGrid
            locations={_.values(ALL_LOCATIONS)}
            currentLocation={currentLocation}
            onChangeLocation={onChangeLocation}
          />
        </Box>
      </Box>
    </motion.div>
  );
};
