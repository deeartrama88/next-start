import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  FVItem,
  Timeout,
  FruitsVegetablesState,
} from "@/types/fruitsVegetables";

export const useFruitsVegetablesGrid = create<FruitsVegetablesState>()(
  immer((set) => ({
    bucket: [
      {
        type: "Fruit",
        name: "Apple",
      },
      {
        type: "Vegetable",
        name: "Broccoli",
      },
      {
        type: "Vegetable",
        name: "Mushroom",
      },
      {
        type: "Fruit",
        name: "Banana",
      },
      {
        type: "Vegetable",
        name: "Tomato",
      },
      {
        type: "Fruit",
        name: "Orange",
      },
      {
        type: "Fruit",
        name: "Mango",
      },
      {
        type: "Fruit",
        name: "Pineapple",
      },
      {
        type: "Vegetable",
        name: "Cucumber",
      },
      {
        type: "Fruit",
        name: "Watermelon",
      },
      {
        type: "Vegetable",
        name: "Carrot",
      },
    ],
    fruits: [],
    vegetables: [],
    timeouts: [],
    addTimeout: (item: Timeout) =>
      set((state) => {
        state.timeouts.push(item);
        const bucketItem = state.bucket.find((i) => i.name === item.name);
        if (!bucketItem) return;
        const key = bucketItem.type === "Fruit" ? "fruits" : "vegetables";
        state[key].push(bucketItem);
        state.bucket = state.bucket.filter((i) => i.name !== bucketItem.name);
      }),
    deleteTimeout: (item: FVItem) =>
      set((state) => {
        const timeout = state.timeouts.find((i) => i.name === item.name);
        if (!timeout) return;
        clearTimeout(timeout.id);
        state.timeouts = state.timeouts.filter((i) => i.name !== item.name);
        state.bucket.push(item);
        const key = item.type === "Fruit" ? "fruits" : "vegetables";
        state[key] = state[key].filter((i) => i.name !== item.name);
      }),
  }))
);
