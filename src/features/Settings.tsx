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
      <Box display="flex" fontSize="2rem" justifyContent="space-between">
        <FormControlLabel
          label={
            <Typography sx={{ fontSize: "2.5rem" }}>FullScreen</Typography>
          }
          control={<Checkbox defaultChecked />}
        />
        <FormControlLabel
          label={
            <Typography sx={{ fontSize: "2.5rem" }}>Voice Acting</Typography>
          }
          control={<Checkbox defaultChecked />}
        />
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        <Select defaultValue="eng">
          <MenuItem value="eng">English</MenuItem>
          <MenuItem value="rus">Русский</MenuItem>
        </Select>
      </Box>
      <Button onClick={close} sx={{ mt: "4rem" }}>
        Close
      </Button>
    </Box>
  );
};
