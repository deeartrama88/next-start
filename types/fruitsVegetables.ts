export type FruitsVegetablesState = {
  bucket: FVItem[];
  fruits: FVItem[];
  vegetables: FVItem[];
  addToBucket: (bucket: FVItem) => void;
  addToFruits: (fruits: FVItem) => void;
  removeFromFruits: (fruits: FVItem) => void;
  addToVegetables: (vegetables: FVItem) => void;
  removeFromVegetables: (vegetables: FVItem) => void;
};

export type FVItem = {
  name: string;
  type: "Fruit" | "Vegetable";
};
