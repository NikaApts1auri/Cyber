import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Burger() {
  return (
    <header className="flex items-center sm:block justify-between py-2  ">
  

      {/* Burger Menu */}
      <Popover>
        <PopoverTrigger asChild>
        <Button
  variant="ghost"
  className="py-2 p-0 border-0 bg-transparent focus:outline-none"
>
  {/* Burger photo */}
  <img
    src="./icons/Burger.svg"
    alt="Logo"
    className="w-15 h-20 cursor-pointer"
  />
</Button>

        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={8}
          className=" bg-white rounded-md shadow-md border border-gray-200"
        >
          <ul className="space-y-2 flex flex-col  px-10 w-[15rem] py-2">
          <li>
              <Link to={"/"} className="block text-gray-700 border-b-[0.1rem] border-b-grey  hover:text-blue-500">
                Home
              </Link>
              
            </li>
            
            <li>
              <Link to={"about"} className="block text-gray-700 border-b-[0.1rem] border-b-grey  hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to={"contact"} className="block text-gray-700 border-b-[0.1rem] border-b-grey  hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          
          </ul>
        </PopoverContent>
      </Popover>
    </header>
  );
}
