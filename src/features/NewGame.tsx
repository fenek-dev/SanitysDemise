import { Slot } from "@/shared/atoms/Slot/Slot";
import { Box, Button } from "@mui/material";

interface NewGameProps {
  close: () => void;
}

export const NewGame = ({ close }: NewGameProps) => {
  return (
    <Box display="flex" flexDirection="column" minWidth="100%" gap="2rem">
      <Slot to="/character" onClick={close} />
      <Slot to="/character" onClick={close} />
      <Slot to="/character" onClick={close} />
      <Button sx={{ mt: "4rem" }} onClick={close}>
        Close
      </Button>
    </Box>
  );
};
