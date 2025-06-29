import { Link, NavLink } from "react-router";
import whiteLogo from "../assets/logo/2.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Add Event",
      href: "/add-event",
    },
    {
      name: "My Event",
      href: "/my-event",
    },
  ];
  return (
    <nav className="navbar section py-0 my-0">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="mr-4 border p-3 border-sec rounded-md lg:hidden"
          >
            <FaBars size={20} />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 font-semibold shadow bg-main"
          >
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 text-xl">
          <img src={whiteLogo} className="logo" alt="logo" />
          <span className="hidden sm:block">EventSphere</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="join">
          <Link to="/auth/login" className="btn join-item bg-sec text-white">Login</Link>
          <Link to='/auth/register' className="btn join-item bg-sec text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
