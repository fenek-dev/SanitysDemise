import { ALL_STORIES } from "@/entities/stories";
import { CharacterMainStory } from "@/entities/stories/types";
import { Box, Button, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface StoriesProps {
  name: string;
  onChoose: (story: CharacterMainStory) => void;
  selectedStory: CharacterMainStory;
}

export const Stories = ({ name, selectedStory, onChoose }: StoriesProps) => {
  const { t } = useTranslation();
  return (
    <Box
      bgcolor="rgba(var(--main-color-rgb), 0.8)"
      border="2px solid var(--main-color)"
      borderRadius="1rem"
      display="inline-flex"
      flexDirection="column"
      p="1rem"
      gap="1rem"
    >
      <Typography
        textAlign="center"
        variant="h4"
        color="var(--white-main-color)"
      >
        {t("Choose a backstory")}
      </Typography>
      {_.map(ALL_STORIES[name], (story) => (
        <Button
          className="img-button"
          data-checked={selectedStory.name === story.name}
          onClick={() => onChoose(story)}
          sx={{
            minWidth: "20rem",
            ":before": {
              background: `url("${story.image}") center center no-repeat`,
              backgroundSize: "cover",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight="medium"
            className="img-button-text"
          >
            {t(story.name)}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};
