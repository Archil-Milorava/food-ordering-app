import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className=" flex flex-col w-full h-auto gap-4 px-2 py-6 ">
      <h1 className="text-3xl font-semibold">Explore Our Menu</h1>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. our
        mission is to satisfy your cravings and elevate dining experience, one
        delicious meal at a time
      </p>
      <div className="flex justify-around">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center cursor-pointer"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`h-24
                  ${
                    category === item.menu_name
                      ? "border-4 border-orange-500 rounded-full p-1 transition-all"
                      : ""
                  } `}
              />
              <p className="text-gray-600">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
