import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className=" w-full h-24 flex justify-between items-center">
      <img src={assets.logo} alt="logo" className="h-6" />

      <ul className="flex gap-4 text-gray-500">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="search"  className="h-6"/>
        <img src={assets.basket_icon} alt="basket" className="h-6" />
        <button className="border border-gray-400 text-gray-500 rounded-full px-4 py-2 text-sm">
          sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
