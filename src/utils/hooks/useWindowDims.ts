import { useEffect, useState } from "react";
type TDims = {
  width: number;
  height: number;
};
export function useWindowDims() {
  const [windowDims, setWindowDims] = useState<TDims>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowDims({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...windowDims, handleResize };
}
