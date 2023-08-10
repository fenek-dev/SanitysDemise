import { Avatar, Box } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import backpack from "./icons/backpack.png";
import kit from "./icons/kit.png";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.scss";
import { Tab, TabsList, Tabs } from "@mui/base";
import { Backpack } from "./Tabs/Backpack";

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
      <Tabs value={open} onChange={handleChange} className="sidebar-tabs">
        <TabsList className="sidebar-tabs-list">
          <Tab value="backpack" className="sidebar-tab">
            <Avatar src={backpack} variant="rounded" />
          </Tab>
          <Tab value="kit" className="sidebar-tab">
            <Avatar src={kit} variant="rounded" />
          </Tab>
        </TabsList>
        <AnimatePresence>
          <motion.div
            className="sidebar-tabs-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: Boolean(open) ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Backpack />
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </Box>
  );
};
