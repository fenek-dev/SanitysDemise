import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { Typography } from "@mui/material";
import _ from "lodash";

// const Title = styled.h2`
//   font-size: 3rem;
//   font-weight: 600;
// `;

// const Character = styled(motion.span)`
//   display: inline-block;
//   margin-right: -0.05em;
// `;

interface AnimatedTextProps {
  text?: string;
}

export const AnimatedText = ({ text }: AnimatedTextProps) => {
  const [currentText, setCurrentText] = useState(text);

  const ctrls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await ctrls.start("hidden");
      setCurrentText(text);
    };
    animate();
  }, [text]);

  useEffect(() => {
    const animate = async () => {
      await ctrls.start("visible");
    };
    animate();
  }, [currentText]);

  const characterAnimation = (delay: number) => ({
    hidden: {
      opacity: 0,
      y: `0.25em`,
      transition: {
        delay: 0.01 * delay,
      },
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.01 * delay,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  });

  return (
    <Typography variant="body1">
      {_.split(currentText, "").map((character, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation(index)}
        >
          {character}
        </motion.span>
      ))}
    </Typography>
  );
};
