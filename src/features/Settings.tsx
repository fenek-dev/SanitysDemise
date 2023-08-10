import { Checkbox } from "@/shared/atoms/Checkbox/Checkbox";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

interface SettingsProps {
  close: () => void;
}

export const Settings = ({ close }: SettingsProps) => {
  return (
    <Box display="flex" flexDirection="column" minWidth="100%">
      <Box display="flex" justifyContent="space-between" fontSize="2rem">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Typography sx={{ fontSize: "2.5rem" }}>FullScreen</Typography>
          }
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Typography sx={{ fontSize: "2.5rem" }}>Voice Acting</Typography>
          }
        />
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        <Select defaultValue="eng">
          <MenuItem value="eng">English</MenuItem>
          <MenuItem value="rus">Русский</MenuItem>
        </Select>
      </Box>
      <Button sx={{ mt: "4rem" }} onClick={close}>
        Close
      </Button>
    </Box>
  );
};
