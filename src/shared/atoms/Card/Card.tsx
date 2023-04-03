import {
  Button,
  CardActions,
  Card as CardComponent,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface CardProps {}

export const Card = ({ children }: React.PropsWithChildren<CardProps>) => {
  return (
    <CardComponent sx={{ width: "20rem", cursor: "pointer" }}>
      <CardMedia
        sx={{ height: "20rem" }}
        image="../../../../build/icon.png"
        title="green iguana"
      />
      <CardContent>{children}</CardContent>
    </CardComponent>
  );
};
