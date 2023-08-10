import { RootState } from "@/app/store";
import { ItemType } from "@/entities/items/types";
import { Item } from "@/shared/molecules/Item/Item";
import { ItemModal } from "@/widgets/ItemModal/ItemModal";
import { TabPanel } from "@mui/base";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import _ from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";

const MAX_BACKPACK_CAPACITY = 6;

export const Backpack = () => {
  const { items } = useSelector((state: RootState) => state.character);
  const [selectedItem, setItem] = useState<ItemType | null>(null);
  return (
    <TabPanel value="backpack">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        height="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          bgcolor="rgba(var(--main-color-rgb), 0.9)"
          p="1rem"
          gap="1rem"
        >
          {_.map(items, (item) => (
            <Item item={item} onClick={() => setItem(item)} />
          ))}
          {_.map(
            new Array(MAX_BACKPACK_CAPACITY - _.size(items)).fill(0),
            () => (
              <Item />
            )
          )}
        </Box>
        {Boolean(selectedItem) && selectedItem && (
          <ItemModal
            open={Boolean(open)}
            onClose={() => setItem(null)}
            item={selectedItem}
          />
        )}
      </Box>
    </TabPanel>
  );
};
