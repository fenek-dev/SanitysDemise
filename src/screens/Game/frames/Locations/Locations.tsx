import { RootState } from "@/app/store";
import {
  changeLocation,
  setCurrentEvent,
  setCurrentScene,
} from "@/app/store/general/general.slice";
import { EventType } from "@/entities/events/types";
import { getEventByChance } from "@/entities/events/utils";
import { ALL_LOCATIONS, LOCATION_NAMES } from "@/entities/locations";
import { LocationType } from "@/entities/locations/types";
import { LocationsRows } from "@/screens/Game/frames/Locations/components/LocationsRows";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { Box } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import _ from "lodash";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabRows } from "./components/TabRows";
import { MainSection } from "./components/MainSection";

export const Locations = () => {
  const { currentLocation } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();
  const [tab, setTab] = useState<string>("backpack");

  const handleChange = useCallback(
    (_event: unknown, value: string | number | boolean) => {
      setTab(value as string);
    },
    []
  );

  const animation = useCallback(
    async (cb: Function) => {
      await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
      cb();
      await animate(scope.current, { opacity: 1 }, { duration: 0.2 });
    },
    [scope.current]
  );
  const onChangeLocation = useCallback(async (loc: LOCATION_NAMES) => {
    animation(() => dispatch(changeLocation(loc)));
  }, []);

  const onInvestigate = async () => {
    const event = getEventByChance(currentLocation.availableEvents);
    animation(() => {
      dispatch(setCurrentEvent(event));
    });
  };

  return (
    <TabsUnstyled
      value={tab}
      onChange={handleChange}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "black",
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 5fr 1fr",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <LocationsRows
        locations={_.values(ALL_LOCATIONS)}
        currentLocation={currentLocation}
        onChangeLocation={onChangeLocation}
      />
      <MainSection
        currentLocation={currentLocation}
        onInvestigate={onInvestigate}
        ref={scope}
      />

      <TabRows />
    </TabsUnstyled>
  );
};
