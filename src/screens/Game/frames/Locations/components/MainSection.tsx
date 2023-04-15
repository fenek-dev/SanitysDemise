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
        display="flex"
        flexDirection="column"
        width="100%"
        border="2px solid var(--white-main-color)"
        borderRadius="0.3rem"
        bgcolor="var(--main-color)"
        sx={{
          aspectRatio: "1.7",
        }}
      >
        <Box
          height="100%"
          width="100%"
          ref={scope}
          sx={{
            background: `url("${currentLocation.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <Backpack />
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="0.5rem"
        minWidth="13rem"
        py="1rem"
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
                    background: `url("${subloc?.image}") center center no-repeat`,
                    backgroundSize: "cover",
                  },
                }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
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
            </motion.span>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
});
