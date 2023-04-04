import { Typography } from "@mui/material";

export const DIFFICULTIES = {
  easy: "easy",
  hell: "hell",
} as const;
type DifficultiesMapType = Record<keyof typeof DIFFICULTIES, React.ReactNode>;

export const DIFFICULTIES_MAP: DifficultiesMapType = {
  easy: (
    <Typography variant="h4" textAlign="center" color="var(--easy-color)">
      [Easy]
    </Typography>
  ),
  hell: (
    <Typography variant="h4" textAlign="center" color="var(--impossible-color)">
      [HELL]
    </Typography>
  ),
};
