import { Typography } from "@mui/material";
import { TFunction } from "i18next";

export const DIFFICULTIES = {
  _empty: "_empty",
  easy: "easy",
  hell: "hell",
} as const;
type DifficultiesMapType = Record<keyof typeof DIFFICULTIES, React.ReactNode>;

export const DIFFICULTIES_MAP: (t: TFunction) => DifficultiesMapType = (t) => ({
  _empty: "_empty",
  easy: (
    <Typography color="var(--easy-color)" textAlign="center" variant="h4">
      [{t("Easy")}]
    </Typography>
  ),
  hell: (
    <Typography color="var(--impossible-color)" textAlign="center" variant="h4">
      [{t("HELL")}]
    </Typography>
  ),
});
