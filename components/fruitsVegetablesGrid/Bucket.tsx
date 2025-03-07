"use client";

import { FVItem, Timeout } from "@/types/fruitsVegetables";
import { useFruitsVegetablesGrid } from "@/hooks/useFruitsVegetablesGrid";

const Bucket = () => {
  const { bucket, addTimeout, deleteTimeout } = useFruitsVegetablesGrid();

  const onItemClick = (item: FVItem) => {
    const timeoutId = setTimeout(() => {
      deleteTimeout(item);
    }, 5000);

    const timeout: Timeout = { name: item.name, id: timeoutId };

    addTimeout(timeout);
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
