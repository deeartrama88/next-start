"use client";

import Bucket from "./Bucket";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";

const Grid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 min-h-screen">
      <Bucket />
      <Fruits />
      <Vegetables />
    </div>
  );
};

export default Grid;
