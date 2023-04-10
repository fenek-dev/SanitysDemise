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
  onInvestigate: () => void;
}

export const LocationsGrid = ({
  locations,
  currentLocation,
  onChangeLocation,
  onInvestigate,
}: LocationsGridProps) => {
  const { t } = useTranslation();

  return (
    <Box display="inline-flex">
      <Box display="grid" gridTemplateColumns="repeat(3, 3rem)" gap="1rem">
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
        gap="0.5rem"
        minWidth="13rem"
      >
        <AnimatePresence>
          {_.map(currentLocation.subLocations, (subloc) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className="img-button"
                sx={{
                  paddingY: "0",
                  ":before": {
                    background: `url("${subloc.image}") center center no-repeat`,
                    backgroundSize: "cover",
                  },
                }}
                variant="outlined"
              >
                <Typography
                  className="img-button-text"
                  variant="h6"
                  zIndex="10"
                >
                  {t(subloc.name)}
                </Typography>
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
        {currentLocation.name !== "Home" && (
          <Button
            variant="contained"
            fullWidth
            sx={{
              paddingY: "0",
            }}
            onClick={onInvestigate}
          >
            <Typography variant="h6">{t("Investigate")}</Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
