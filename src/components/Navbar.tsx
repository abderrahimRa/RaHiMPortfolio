import { Link } from "react-router-dom";
interface Navitems {
  menuItems: string[];
}

const NavBar: React.FC<Navitems> = ({ menuItems }) => (
  <nav className="sticky w-full sm:pl-4 sm:pr-3">
    <ul className="flex w-full items-center justify-between py-2 text-lg text-white md:justify-end">
      <li className="hidden pl-5 text-2xl font-semibold sm:flex md:mr-auto md:text-3xl">
        Portfolio
      </li>

      <div className="flex w-full justify-evenly sm:w-auto sm:space-x-3 md:space-x-5">
        {menuItems.map((item) => (
          <li
            className="flex cursor-pointer rounded-md px-2 py-1 text-[#5f97b6] hover:bg-[#5f97b6] hover:text-white sm:px-3 sm:text-lg md:text-xl lg:p-3"
            key={item}
          >
            <Link to={item === "Home" ? "/" : `/${item}`}>{item}</Link>
          </li>
        ))}
      </div>
    </ul>
  </nav>
);

export default NavBar;
