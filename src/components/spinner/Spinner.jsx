import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <div className="spinner flex flex-center">
      <CircularProgress size={30} />
    </div>
  );
};

export default Spinner;
