import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="w-full h-[88px] bg-white flex items-center justify-center space-x-9 shadow-md">
        <NavLink to="/" className={({ isActive }) => `text-[16px] ${isActive ? "font-semibold text-blue-600" : "text-black"}`}>
          Home
        </NavLink>
        <NavLink to="/products" className={({isActive}) => `text-[16px] ${isActive ? "font-semibold text-blue-600" : "text-black"}`}>
          Products
        </NavLink>
        <NavLink to="/contact-us" className={({isActive}) => `text-[16px] ${isActive ? "font-semibold text-blue-600" : "text-black"}`}>
          Contact Us
        </NavLink>
        <NavLink to="/about-us" className={({isActive}) => `text-[16px] ${isActive ? "font-semibold text-blue-600" : "text-black"}`}>
          About Us
        </NavLink>
      </nav>
    </div>
  );
}
