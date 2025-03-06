"use client";

import { FVItem } from "@/types/fruitsVegetables";
import { useFruitsVegetablesGrid } from "@/hooks/useFruitsVegetablesGrid";

const Bucket = () => {
  const { bucket, addToFruits, addToVegetables } = useFruitsVegetablesGrid();

  const onItemClick = (item: FVItem) => {
    if (item.type === "Fruit") {
      addToFruits(item);
    } else {
      addToVegetables(item);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {bucket.map((item) => (
        <button key={item.name} onClick={() => onItemClick(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Bucket;
