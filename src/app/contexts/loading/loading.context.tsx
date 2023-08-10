import { createContext, useContext, useState } from "react";

export interface LoadingContextType {
  images?: string[];
  loading: boolean;
  setImages: (value: string[]) => void;
  setLoading: (value: boolean) => void;
}

//create a context, with createContext api
export const LoadingContext = createContext<LoadingContextType>({
  images: undefined,
  loading: false,
  setImages: () => null,
  setLoading: () => null,
});

const LoadingContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>();

  return (
    <LoadingContext.Provider value={{ images, loading, setImages, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);

export default LoadingContextProvider;
