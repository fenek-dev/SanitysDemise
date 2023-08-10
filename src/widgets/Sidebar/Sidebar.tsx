import { Tab, Tabs, TabsList } from "@mui/base";
import { Avatar, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { SyntheticEvent, useState } from "react";

import "./Sidebar.scss";
import { Backpack } from "./Tabs/Backpack";
import backpack from "./icons/backpack.png";
import kit from "./icons/kit.png";

export const Sidebar = () => {
  const [open, setOpen] = useState<string>("backpack");

  const handleChange = (
    _event: SyntheticEvent<Element, Event> | null,
    value: any
  ) => {
    setOpen(value as string);
  };

  return (
    <Box className="sidebar">
      <Tabs className="sidebar-tabs" onChange={handleChange} value={open}>
        <TabsList className="sidebar-tabs-list">
          <Tab className="sidebar-tab" value="backpack">
            <Avatar src={backpack} variant="rounded" />
          </Tab>
          <Tab className="sidebar-tab" value="kit">
            <Avatar src={kit} variant="rounded" />
          </Tab>
        </TabsList>
        <AnimatePresence>
          <motion.div
            animate={{ opacity: Boolean(open) ? 1 : 0 }}
            className="sidebar-tabs-content"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Backpack />
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </Box>
  );
};
