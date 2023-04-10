import { Typography } from "@mui/material";
import { TFunction } from "i18next";

export const STATS_MAP = {
  sp: "Sanity",
  hp: "Health",
} as const;
type StatsMapType = Record<keyof typeof STATS_MAP, React.ReactNode>;
