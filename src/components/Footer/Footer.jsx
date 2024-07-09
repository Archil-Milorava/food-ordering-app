import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="h-80 w-full bg-gray-700 mt-8 grid grid-cols-3 gap-4 content-center px-24">
      <div className="">
        <img className="h-8" src={assets.logo} alt="footer" />
        <p className="text-sm mt-4 text-gray-300">
          Order your favorite meals effortlessly from our wide selection of
          delicious dishes. From cheesy pizzas to juicy burgers and fresh sushi,
          we have something for everyone.
        </p>
        <div className="flex gap-2 mt-4">
            <a href="https://www.facebook.com/achi.barsa" target="blank"> <img className="h-8" src={assets.facebook_icon} alt="fa" /></a>
            <a href="https://www.linkedin.com/in/archil-milorava-9199a110a/" target="blank"><img className="h-8" src={assets.linkedin_icon} alt="in" />
            </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center text-gray-300">
        <h1 className="font-bold text-2xl">COMPANY</h1>
        <ul className="flex flex-col gap-2 text-gray-300 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Delivery</a>
          </li>
        </ul>
      </div>

      <div className="text-gray-300 flex flex-col items-end gap-2">
        <h1 className="text-gray-300 font-bold text-2xl">GET IN TOUCH</h1>
        <p>+123 123 123</p>
        <p>achimilorava16@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
