import { Slot } from "@/shared/atoms/Slot/Slot";
import { Box, Button } from "@mui/material";

interface NewGameProps {
  close: () => void;
}

export const NewGame = ({ close }: NewGameProps) => {
  return (
    <Box display="flex" flexDirection="column" gap="2rem" minWidth="100%">
      <Slot onClick={close} to="/character" />
      <Slot onClick={close} to="/character" />
      <Slot onClick={close} to="/character" />
      <Button onClick={close} sx={{ mt: "4rem" }}>
        Close
      </Button>
    </Box>
  );
};
