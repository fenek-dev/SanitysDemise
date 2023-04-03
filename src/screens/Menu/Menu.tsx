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
        <Button
          className="img-button start-btn"
          variant="outlined"
          onClick={() => setOpen("new-game")}
        >
          <span>New Game</span>
        </Button>
        <Button className="img-button continue-btn" variant="outlined" disabled>
          <span>Continue</span>
        </Button>
        <Button
          className="img-button settings-btn"
          variant="outlined"
          onClick={() => setOpen("settings")}
        >
          <span>Settings</span>
        </Button>
        <Button className="img-button quit-btn" variant="outlined">
          <span>Quit</span>
        </Button>
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
