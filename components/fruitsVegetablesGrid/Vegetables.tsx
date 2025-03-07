import { useFruitsVegetablesGrid } from "@/hooks/useFruitsVegetablesGrid";

const Vegetables = () => {
  const { vegetables, deleteTimeout } = useFruitsVegetablesGrid();

  const onClick = () => {
    const item = vegetables.at(-1);
    if (!item) return;
    deleteTimeout(item);
  };

  return (
    <div
      className="flex flex-col gap-2 border-2 border-green-600 rounded-md p-2"
      onClick={() => onClick()}
    >
      <h2 className="text-2xl font-bold text-green-600 text-center">
        Vegetables
      </h2>
      <div className="flex flex-col gap-2 ">
        {vegetables.map((vegetable) => (
          <button key={vegetable.name}>{vegetable.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
