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
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      gap="1rem"
      pt="1rem"
    >
      <Typography
        textAlign="center"
        variant="h4"
        color="var(--white-main-color)"
      >
        {t("Choose difficulty")}
      </Typography>
      <Button className="img-button" data-checked={true}>
        <Typography
          variant="h5"
          fontWeight="medium"
          className="img-button-text"
        >
          {t("Easy")}
        </Typography>
      </Button>
      <Button className="img-button">
        <Typography
          variant="h5"
          fontWeight="medium"
          className="img-button-text"
        >
          {t("Medium")}
        </Typography>
      </Button>
      <Button className="img-button">
        <Typography
          variant="h5"
          fontWeight="medium"
          className="img-button-text"
        >
          {t("Hard")}
        </Typography>
      </Button>
      <Box textAlign="center" mt="auto">
        <Link to="/game">
          <Button fullWidth onClick={onGameStart}>
            <Typography variant="h4">{t("Start game")}</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
