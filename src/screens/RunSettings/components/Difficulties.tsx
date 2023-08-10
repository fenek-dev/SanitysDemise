import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface DifficultiesProps {
  onGameStart: () => void;
}

export const Difficulties = ({ onGameStart }: DifficultiesProps) => {
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      height="100%"
      pt="1rem"
      width="100%"
    >
      <Typography
        color="var(--white-main-color)"
        textAlign="center"
        variant="h4"
      >
        {t("Choose difficulty")}
      </Typography>
      <Button className="img-button" data-checked={true}>
        <Typography
          className="img-button-text"
          fontWeight="medium"
          variant="h5"
        >
          {t("Easy")}
        </Typography>
      </Button>
      <Button className="img-button">
        <Typography
          className="img-button-text"
          fontWeight="medium"
          variant="h5"
        >
          {t("Medium")}
        </Typography>
      </Button>
      <Button className="img-button">
        <Typography
          className="img-button-text"
          fontWeight="medium"
          variant="h5"
        >
          {t("Hard")}
        </Typography>
      </Button>
      <Box mt="auto" textAlign="center">
        <Link to="/game">
          <Button fullWidth onClick={onGameStart}>
            <Typography variant="h4">{t("Start game")}</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
