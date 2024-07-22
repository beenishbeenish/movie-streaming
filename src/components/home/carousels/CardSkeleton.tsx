import { Skeleton } from "@mui/material";
import React from "react";

interface CardSkeletonProps {}
const CardSkeleton: React.FC<CardSkeletonProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 310,
        gap: "4px",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={300}
        height={300}
        sx={{ backgroundColor: "darkGrey" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", backgroundColor: "darkGrey" }}
        width={"80%"}
      />
    </div>
  );
};

export default CardSkeleton;
