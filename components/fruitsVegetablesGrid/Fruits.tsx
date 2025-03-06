import { useFruitsVegetablesGrid } from "@/hooks/useFruitsVegetablesGrid";

const Fruits = () => {
  const { fruits, removeFromFruits } = useFruitsVegetablesGrid();

  return (
    <div className="flex flex-col gap-2 border-2 border-orange-300 rounded-md p-2">
      <h2 className="text-2xl font-bold text-orange-300 text-center">Fruits</h2>
      <div className="flex flex-col gap-2 ">
        {fruits.map((fruit) => (
          <button key={fruit.name} onClick={() => removeFromFruits(fruit)}>
            {fruit.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
