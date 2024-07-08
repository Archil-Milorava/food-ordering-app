import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Top dishes near you</h2>
      <div className="grid grid-cols-4 gap-10">
        {food_list.map((item, index) => {
          const { _id, name, description, price, image } = item;

          return (
            <FoodItem
              key={index}
              id={_id}
              name={name}
              description={description}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
