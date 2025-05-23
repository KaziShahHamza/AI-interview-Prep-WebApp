import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
