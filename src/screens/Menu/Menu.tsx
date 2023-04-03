import "./Menu.scss";
import { Modal } from "@/shared/atoms/Modal/Modal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Settings } from "@/features/Settings";
import { NewGame } from "@/features/NewGame";

console.log(
  "[Menu.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function Menu() {
  const [bg, setBg] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const timeout = window.setInterval(() => {
      setBg((value) => (value + 1) % 2);
    }, 60000);

    return () => {
      window.clearInterval(timeout);
    };
  }, []);
  return (
    <div className={`full bg${bg}`}>
      <div className="menu-block">
        <Button variant="outlined" onClick={() => setOpen("new-game")}>
          New Game
        </Button>
        <Button variant="outlined" disabled>
          Continue
        </Button>
        <Button variant="outlined" onClick={() => setOpen("settings")}>
          Settings
        </Button>
        <Button variant="outlined">Quit</Button>
      </div>
      <Modal
        open={Boolean(open)}
        sx={{
          position: "fixed",
          inset: "auto 2rem auto auto",
        }}
      >
        <>
          {open === "new-game" && <NewGame close={() => setOpen(null)} />}
          {open === "settings" && <Settings close={() => setOpen(null)} />}
        </>
      </Modal>
    </div>
  );
}

export default Menu;
