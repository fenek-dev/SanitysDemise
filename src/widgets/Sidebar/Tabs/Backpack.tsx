import { Katana_weapon } from "@/entities/items/weapon/unique/Katana/katana.item";
import { Item } from "@/shared/molecules/Item/Item";
import { TabPanelUnstyled } from "@mui/base";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export const Backpack = () => {
  return (
    <TabPanelUnstyled
      value="backpack"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        p="1rem"
        gap="1rem"
      >
        <Item item={Katana_weapon} />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Box>
    </TabPanelUnstyled>
  );
};
