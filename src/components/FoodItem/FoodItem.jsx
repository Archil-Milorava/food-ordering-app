import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, description, price, image }) {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="rounded-xl shadow-md">
      <div>
        <img src={image} alt={name} className="border rounded-t-xl" />
        {!cartItems[id] ? (
          <img className="h-8 m-2 transition-all cursor-pointer"
            src={assets.add_icon_white}
            onClick={()=> addToCart(id)}
          />
        ) : (
          <div className="flex items-center gap-2 m-2 justify-start">
            <img className="h-8 cursor-pointer transition-all"
              src={assets.remove_icon_red}
              onClick={()=> removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img className="h-8 cursor-pointer transition-all"
              src={assets.add_icon_green}
              onClick={()=> addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" className="h-4" />
        </div>
        <p className="text-sm text-gray-800 mb-2">{description}</p>
        <p className="font-bold text-xl text-orange-500">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
