import React from "react";
import "./ChooseCharacter.scss";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "@/shared/atoms/Card/Card";

export const ChooseCharacter = () => {
  return (
    <Box className="full choose-character-bg">
      <Box
        display="flex"
        gap="5rem"
        marginX="auto"
        padding="5rem"
        justifyContent="center"
      >
        <Card>
          <Typography
            gutterBottom
            variant="h3"
            textAlign="center"
            lineHeight={0.5}
          >
            Ithan
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" lineHeight={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            recusandae officiis animi maiores dicta nam veniam id corrupti a
            sequi! Tempora rerum est at veritatis, pariatur dolorem vitae eius
            porro.
          </Typography>
        </Card>
        <Card>
          <Typography
            gutterBottom
            variant="h3"
            textAlign="center"
            lineHeight={0.5}
          >
            Ithan
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" lineHeight={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            recusandae officiis animi maiores dicta nam veniam id corrupti a
            sequi! Tempora rerum est at veritatis, pariatur dolorem vitae eius
            porro.
          </Typography>
        </Card>
        <Card>
          <Typography
            gutterBottom
            variant="h3"
            textAlign="center"
            lineHeight={0.5}
          >
            Ithan
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" lineHeight={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            recusandae officiis animi maiores dicta nam veniam id corrupti a
            sequi! Tempora rerum est at veritatis, pariatur dolorem vitae eius
            porro.
          </Typography>
        </Card>
      </Box>
      <Box display="flex" justifyContent="center">
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Box>
    </Box>
  );
};
