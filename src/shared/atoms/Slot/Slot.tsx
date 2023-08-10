import { Button, ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

import "./Slot.scss";

interface SlotProps extends ButtonProps {
  to: string;
}

export const Slot = ({ to, ...props }: SlotProps) => {
  return (
    <Link to={to}>
      <Button className="border slot" {...props}>
        Empty
      </Button>
    </Link>
  );
};
