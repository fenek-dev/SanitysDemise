import { LOCATION_NAMES } from "@/entities/locations";
import { LocationType } from "@/entities/locations/types";
import { Avatar, Box, Button, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface LocationsGridProps {
  locations: LocationType[];
  currentLocation: LocationType;
  onChangeLocation: (loc: LOCATION_NAMES) => void;
}

export const LocationsGrid = ({
  locations,
  currentLocation,
  onChangeLocation,
}: LocationsGridProps) => {
  const { t } = useTranslation();

  return (
    <Box display="inline-flex">
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 3rem)"
        gap="1rem"
        mb="2rem"
      >
        {_.map(locations, (loc) => (
          <Avatar
            src={loc.image}
            variant="rounded"
            onClick={() => onChangeLocation(loc.name)}
            sx={{
              width: "3rem",
              height: "3rem",
              cursor: "pointer",
              border:
                currentLocation.name === loc.name
                  ? "2px solid #d1d5db"
                  : "none",
            }}
          />
        ))}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        gap="1rem"
        minWidth="13rem"
      >
        {_.map(currentLocation.subLocations, (subloc) => (
          <Button
            className="img-button"
            sx={{
              ":before": {
                background: `url("${subloc.image}") center center no-repeat`,
                backgroundSize: "cover",
              },
            }}
            variant="outlined"
          >
            <Typography className="img-button-text" variant="h6" zIndex="10">
              {t(subloc.name)}
            </Typography>
          </Button>
        ))}
        <Button variant="contained" fullWidth>
          <Typography variant="h6">{t("Investigate")}</Typography>
        </Button>
      </Box>
    </Box>
  );
};
