import { RootState } from "@/app/store";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import "./Avatar.scss";

export const Avatar = () => {
  const { currentMainStats, selectedCharacter } = useSelector(
    (state: RootState) => state.character
  );

  return (
    <Box
      border="2px solid var(--main-color)"
      color="var(--white-main-color)"
      mt="auto"
      width="100%"
    >
      <Card
        sx={{
          aspectRatio: "1",
          background: "none !important",
          border: "none !important",
          borderRadius: "0 !important",
          boxShadow: "none !important",
          position: "relative",
          width: "100%",
        }}
      >
        <CardMedia
          image={selectedCharacter.imageMap.norm}
          sx={{ aspectRatio: "1", width: "100%" }}
        />
      </Card>

      <Box display="grid" gridTemplateColumns="1fr 1fr" textAlign="center">
        <Box borderRight="2px solid var(--main-color)" className="hp-bg">
          <span className="main-stat hp">{currentMainStats.hp}</span>
          <Typography variant="caption">hp</Typography>
        </Box>
        <Box className="sp-bg">
          <span className="main-stat sp">{currentMainStats.sp}</span>
          <Typography variant="caption">sp</Typography>
        </Box>
      </Box>
    </Box>
  );
};
