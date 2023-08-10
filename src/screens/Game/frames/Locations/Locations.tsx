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
import { TabRows } from "./components/TabRows";
import { MainSection } from "./components/MainSection";
import { useFade } from "@/app/hooks/useFade";

export const Locations = () => {
  const { currentLocation } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [scope, animation] = useFade(0.3);
  const [tab, setTab] = useState<string>("");

  const handleChange = useCallback(
    (_event: unknown, value: string | number | boolean | null) => {
      setTab(value as string);
    },
    []
  );

  const onChangeLocation = useCallback(async (loc: LOCATION_NAMES) => {
    handleChange(null, "");
    animation(() => {
      dispatch(changeLocation(loc));
    });
  }, []);

  const onInvestigate = async () => {
    const event = getEventByChance(currentLocation.availableEvents);
    animation(() => {
      dispatch(setCurrentEvent(event));
    });
  };

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
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
    </Tabs>
  );
};
