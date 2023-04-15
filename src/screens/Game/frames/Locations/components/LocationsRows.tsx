import { EventType } from "@/entities/events/types";
import { getEventByChance } from "@/entities/events/utils";
import { LOCATION_NAMES } from "@/entities/locations";
import { LocationType } from "@/entities/locations/types";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface LocationsGridProps {
  locations: LocationType[];
  currentLocation: LocationType;
  onChangeLocation: (loc: LOCATION_NAMES) => void;
}

export const LocationsRows = React.memo(
  ({ locations, currentLocation, onChangeLocation }: LocationsGridProps) => {
    const { t } = useTranslation();

    return (
      <Box display="inline-flex" width="100%">
        <Box display="flex" flexDirection="column" gap="1rem" width="100%">
          {_.map(locations, (loc) => (
            <Button
              className="img-button"
              onClick={() => onChangeLocation(loc.name)}
              data-checked={currentLocation.name === loc.name}
              sx={{
                ":before": {
                  background: `url("${loc.image}") center center no-repeat`,
                  backgroundSize: "cover",
                },
              }}
              fullWidth
            >
              <Typography variant="h5" className="img-button-text">
                {t(loc.name)}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    );
  }
);
