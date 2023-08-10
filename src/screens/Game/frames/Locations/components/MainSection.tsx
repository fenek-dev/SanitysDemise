import { HomeLocation } from "@/entities/locations/home/home.location";
import { LocationType } from "@/entities/locations/types";
import { Backpack } from "@/widgets/Sidebar/Tabs/Backpack";
import { Box, Button, Typography } from "@mui/material";
import { AnimatePresence, AnimationScope, motion } from "framer-motion";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface MainSectionProps {
  currentLocation: LocationType;
  onInvestigate: () => void;
}

export const MainSection = React.forwardRef<
  AnimationScope<unknown>,
  MainSectionProps
>(({ currentLocation, onInvestigate }, scope) => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column">
      <Box
        sx={{
          aspectRatio: "1.7",
        }}
        bgcolor="var(--main-color)"
        border="2px solid var(--white-main-color)"
        borderRadius="0.3rem"
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Box
          sx={{
            background: `url("${currentLocation.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
          height="100%"
          ref={scope}
          width="100%"
        >
          <Backpack />
        </Box>
      </Box>
      <Box
        display="grid"
        gap="0.5rem"
        gridTemplateColumns="repeat(3, 1fr)"
        minWidth="13rem"
        py="1rem"
      >
        <AnimatePresence>
          {_.map(currentLocation.subLocations, (subloc) => (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                sx={{
                  ":before": {
                    background: `url("${subloc?.image}") center center no-repeat`,
                    backgroundSize: "cover",
                  },
                  paddingY: "0",
                }}
                className="img-button"
              >
                <Typography
                  className="img-button-text"
                  variant="h6"
                  zIndex="10"
                >
                  {t(subloc!.name)}
                </Typography>
              </Button>
            </motion.div>
          ))}
          {currentLocation.name !== HomeLocation.name && (
            <motion.span
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                sx={{
                  paddingY: "0",
                }}
                fullWidth
                onClick={onInvestigate}
                variant="contained"
              >
                <Typography variant="h6">{t("Investigate")}</Typography>
              </Button>
            </motion.span>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
});
