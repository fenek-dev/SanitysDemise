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
        animate={{ opacity: 1 }}
        component={motion.div}
        exit={{ opacity: 0 }}
        height="100%"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          bgcolor="rgba(var(--main-color-rgb), 0.9)"
          display="flex"
          flexDirection="column"
          gap="1rem"
          height="100%"
          p="1rem"
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
            item={selectedItem}
            onClose={() => setItem(null)}
            open={Boolean(selectedItem)}
          />
        )}
      </Box>
    </TabPanel>
  );
};
