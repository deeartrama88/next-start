import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { FruitsVegetablesState } from "@/types/fruitsVegetables";

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
    addToBucket: (item) =>
      set((state) => {
        state.bucket.push(item);
      }),
    addToFruits: (fruit) =>
      set((state) => {
        state.fruits.push(fruit);
        state.bucket = state.bucket.filter((i) => i.name !== fruit.name);
      }),
    removeFromFruits: (fruit) =>
      set((state) => {
        state.fruits = state.fruits.filter((i) => i.name !== fruit.name);
        state.bucket.push(fruit);
      }),
    addToVegetables: (vegetable) =>
      set((state) => {
        state.vegetables.push(vegetable);
        state.bucket = state.bucket.filter((i) => i.name !== vegetable.name);
      }),
    removeFromVegetables: (vegetable) =>
      set((state) => {
        state.vegetables = state.vegetables.filter(
          (i) => i.name !== vegetable.name
        );
        state.bucket.push(vegetable);
      }),
  }))
);
