import { useAnimate } from "framer-motion";

export const useFade = (duration = 0.3) => {
  const [scope, animate] = useAnimate();

  const animation = async (cb: Function) => {
    await animate(scope.current, { opacity: 0 }, { duration });
    cb();
    await animate(scope.current, { opacity: 1 }, { duration });
  };

  return [scope, animation] as const;
};
