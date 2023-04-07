import { Avatar, Box } from "@mui/material";
import React, { useState } from "react";
import backpack from "./icons/backpack.png";
import kit from "./icons/kit.png";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.scss";
import {
  TabPanelUnstyled,
  TabUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
} from "@mui/base";

export const Sidebar = () => {
  const [open, setOpen] = useState<string>("backpack");

  const handleChange = (_event: unknown, value: string | number | boolean) => {
    setOpen(value as string);
  };

  return (
    <Box className="sidebar">
      <TabsUnstyled
        value={open}
        onChange={handleChange}
        className="sidebar-tabs"
      >
        <TabsListUnstyled className="sidebar-tabs-list">
          <TabUnstyled component="div" value="backpack" className="sidebar-tab">
            <Avatar
              src={backpack}
              variant="rounded"
              sx={{ width: "3rem", height: "3rem" }}
            />
          </TabUnstyled>
          <TabUnstyled component="div" value="kit" className="sidebar-tab">
            <Avatar
              src={kit}
              variant="rounded"
              sx={{ width: "3rem", height: "3rem" }}
            />
          </TabUnstyled>
        </TabsListUnstyled>
        <AnimatePresence>
          <motion.div
            className="sidebar-tabs-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: Boolean(open) ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <TabPanelUnstyled
              value="backpack"
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              hello
            </TabPanelUnstyled>
          </motion.div>
        </AnimatePresence>
      </TabsUnstyled>
    </Box>
  );
};
