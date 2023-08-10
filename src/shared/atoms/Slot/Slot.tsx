import { Button, ButtonProps } from "@mui/material";
import "./Slot.scss";
import { Link } from "react-router-dom";

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
