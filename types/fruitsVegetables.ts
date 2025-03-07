export type FruitsVegetablesState = {
  bucket: FVItem[];
  fruits: FVItem[];
  vegetables: FVItem[];
  timeouts: Timeout[];
  addTimeout: (item: Timeout) => void;
  deleteTimeout: (item: FVItem) => void;
};

export type FVItem = {
  name: string;
  type: "Fruit" | "Vegetable";
};

export type Timeout = {
  name: string;
  id: NodeJS.Timeout;
};
