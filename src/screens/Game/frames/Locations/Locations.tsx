import { useFade } from "@/app/hooks/useFade";
import { RootState } from "@/app/store";
import {
  changeLocation,
  setCurrentEvent,
} from "@/app/store/general/general.slice";
import { getEventByChance } from "@/entities/events/utils";
import { ALL_LOCATIONS, LOCATION_NAMES } from "@/entities/locations";
import { LocationsRows } from "@/screens/Game/frames/Locations/components/LocationsRows";
import { Tabs } from "@mui/base";
import _ from "lodash";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainSection } from "./components/MainSection";
import { TabRows } from "./components/TabRows";

export const Locations = () => {
  const { currentLocation } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [scope, animation] = useFade(0.3);
  const [tab, setTab] = useState<string>("");

  const handleChange = useCallback(
    (_event: unknown, value: boolean | null | number | string) => {
      setTab(value as string);
    },
    []
  );

  const onChangeLocation = useCallback(async (loc: LOCATION_NAMES) => {
    handleChange(null, "");
    animation(() => {
      dispatch(changeLocation(loc));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInvestigate = async () => {
    const event = getEventByChance(currentLocation.availableEvents);
    animation(() => {
      dispatch(setCurrentEvent(event));
    });
  };

  return (
    <Tabs
      style={{
        background: "black",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr 5fr 1fr",
        height: "100%",
        padding: "1rem",
        width: "100%",
      }}
      onChange={handleChange}
      value={tab}
    >
      <LocationsRows
        currentLocation={currentLocation}
        locations={_.values(ALL_LOCATIONS)}
        onChangeLocation={onChangeLocation}
      />
      <MainSection
        currentLocation={currentLocation}
        onInvestigate={onInvestigate}
        ref={scope}
      />

      <TabRows />
    </Tabs>
  );
};
