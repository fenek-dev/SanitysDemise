import { Slot } from "@/shared/atoms/Slot/Slot";
import { Box, Button } from "@mui/material";
import React from "react";

interface NewGameProps {
  close: () => void;
}

export const NewGame = ({ close }: NewGameProps) => {
  return (
    <Box display="flex" flexDirection="column" minWidth="100%" gap="2rem">
      <Slot to="/character" />
      <Slot to="/character" />
      <Slot to="/character" />
      <Button sx={{ mt: "4rem" }} onClick={close}>
        Close
      </Button>
    </Box>
  );
};
