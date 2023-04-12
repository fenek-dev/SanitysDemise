import { RootState } from "@/app/store";
import { AnimatedText } from "@/shared/molecules/AnimatedText/AnimatedText";
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const StoryDescription = React.forwardRef((_props, ref) => {
  const { mainStory } = useSelector((state: RootState) => state.general);
  const { t } = useTranslation();
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <Box
        m="1rem"
        border="2px solid var(--white-main-color)"
        borderRadius="0.3rem"
        bgcolor="var(--main-color)"
        sx={{
          aspectRatio: "1.7",
        }}
      >
        <Box
          ref={ref}
          height="100%"
          width="100%"
          sx={{
            background: `url("${mainStory?.image}") center center no-repeat`,
            backgroundSize: "cover",
          }}
        />
      </Box>
      <Box
        m="1rem"
        p="1rem"
        bgcolor="rgba(var(--bg-color-rgb), 0.5)"
        borderRadius="0.3rem"
        border="2px solid var(--white-main-color)"
        textAlign="center"
      >
        <AnimatedText
          speed={0.005}
          text={t(mainStory?.description || "") || ""}
          variant="h5"
        />
      </Box>
    </Box>
  );
});
