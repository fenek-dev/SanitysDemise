import { useLoadingContext } from "@/app/contexts/loading/loading.context";
import { preloadImages } from "@/app/utils/images/preloadImages";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export const Loading = () => {
  const { images, setLoading, loading } = useLoadingContext();

  useEffect(() => {
    if (images) {
      console.time();
      preloadImages(images).then((vals) => {
        console.log(vals);

        console.timeEnd();
        setLoading(false);
      });
    }
  }, [images]);
  return (
    <AnimatePresence>
      {loading && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="full"
          zIndex="100"
          bgcolor="white"
        >
          Loading
        </Box>
      )}
    </AnimatePresence>
  );
};

export const usePreloadImages = (images: string[]) => {
  const { setLoading, setImages, loading } = useLoadingContext();

  useEffect(() => {
    setLoading(true);
    setImages(images);
  }, []);

  return loading && <div />;
};
