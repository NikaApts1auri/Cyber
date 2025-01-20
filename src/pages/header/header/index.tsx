import { Link, useNavigate } from "react-router-dom";
import Burger from "../../../ui/burger";
// import Modes from "../darkMode";

export default function Header() {
  const navigate = useNavigate();

  // ფუნქციები მენიუს გადამისამართებისთვის
  const convertToCart = () => navigate("/cart");
  const convertToProfile = () => navigate("/profile");

  return (
    <div className="flex sm:px-10 items-center border-b-[0.15rem] border-b-grey justify-between p-4  md:p-8">
      <div className="flex items-center">
        {/* Desktop და Tablet ლოგო */}
        <img
          src="./icons/Logo.svg"
          alt="icon"
          className="hidden sm:block cursor-pointer max-w-[120px] md:max-w-[150px]"
        />
        {/* Mobile ლოგო */}
        <img
          src="./icons/Logo.mobile.svg"
          alt="icon"
          className="block sm:hidden cursor-pointer max-w-[80px]"
        />
      </div>

      {/* ნავიგაცია */}
      <ul className="hidden sm:flex space-x-6 px-4">
        <li>
          <Link
            to={"/"}
            className="text-gray-700 hover:text-blue-500 text-[1.5rem] focus:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"about"}
            className="text-gray-700 hover:text-blue-500 text-[1.5rem] focus:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"contact"}
            className="text-gray-700 hover:text-blue-500 text-[1.5rem] focus:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      
      <div className="gap-10 hidden sm:flex">
  <div className="cursor-pointer" onClick={convertToCart}>
    <img src="./icons/Cart.svg" alt="" />
  </div>

  <div className="cursor-pointer" onClick={convertToProfile}>
    <img src="./icons/profile.svg" alt="" />
  </div>
</div>

      {/* მობილური მენიუ */}
     

      <div className="sm:hidden">
        <Burger />
      </div>
      {/* <div>
        <Modes/>
      </div> */}
    </div>
  );
}
