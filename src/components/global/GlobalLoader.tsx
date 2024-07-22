import React from "react";

interface GlobalLoaderProps {}
const GlobalLoader: React.FC<GlobalLoaderProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      GlobalLoader
    </div>
  );
};

export default GlobalLoader;
