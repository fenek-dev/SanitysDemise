import { LOCATION_NAMES } from "@/entities/locations";
import { LocationType } from "@/entities/locations/types";
import { Box, Button, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface LocationsGridProps {
  currentLocation: LocationType;
  locations: LocationType[];
  onChangeLocation: (loc: LOCATION_NAMES) => void;
}

export const LocationsRows = React.memo(
  ({ currentLocation, locations, onChangeLocation }: LocationsGridProps) => {
    const { t } = useTranslation();

    return (
      <Box display="inline-flex" width="100%">
        <Box display="flex" flexDirection="column" gap="1rem" width="100%">
          {_.map(locations, (loc) => (
            <Button
              sx={{
                ":before": {
                  background: `url("${loc.image}") center center no-repeat`,
                  backgroundSize: "cover",
                },
              }}
              className="img-button"
              data-checked={currentLocation.name === loc.name}
              fullWidth
              onClick={() => onChangeLocation(loc.name)}
            >
              <Typography className="img-button-text" variant="h5">
                {t(loc.name)}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    );
  }
);
