import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router";
import whiteLogo from "../assets/logo/2.png";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { error_msg } from "../utils/error.msg";

const Header = () => {
  const { user, fetchData, setFetchData } = useAuth();
  const navigate = useNavigate();
  const [clickLogout, setClickLogout] = useState(false);


    const {
      isLoading: isLoggingOut,
    } = useQuery({
      queryKey: ["logout"],
      enabled: clickLogout,
      queryFn: async () => {
        try {
          const { data } = await axiosSecure("/auth/logout");
          if (data?.success) {
            setFetchData(!fetchData);
            toast.success(data?.message);
            navigate("/auth/login");
          }
        } catch (error) {
          error_msg(error?.message?.response?.data);
        }

        return {};
      },
    });

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
        {user ? (
          <>
            <div className="relative">
              <div className="dropdown dropdown-bottom dropdown-left flex items-center">
                <div tabIndex={0} role="button">
                  <img
                    src={user?.photo_url}
                    className="logo cursor-pointer select-none"
                    alt={`${user?.name}'s profile photo`}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <div
                  className="space-y-2"
                  >
                    <p className="text-nowrap bg-sec p-2 font-semibold rounded-md text-white pointer-events-none text-center">
                      Sajmul Hossain
                    </p>
                    <button
                      onClick={() => setClickLogout(true)}
                      disabled={isLoggingOut}
                      className="btn btn-dash group duration-1000 w-full"
                    >
                      Logout{" "}
                      {isLoggingOut ? (
                        <Loading />
                      ) : (
                        <IoIosLogOut
                          size={20}
                          className="group-hover:translate-x-1 transition"
                        />
                      )}
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="join">
            <Link to="/auth/login" className="btn join-item bg-sec text-white">
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn join-item bg-sec text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
