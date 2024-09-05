import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="flex justify-between fixed bg-white w-full items-center shadow-md shadow-gray-400 py-8 px-4 gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="w-36 md:w-44"
            alt="Logo"
          />
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Enter Items..."
            value={searchParam === "CAKE" ? "" : searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            className="bg-white/75 p-3 px-8 rounded-full outline-none w-44 sm:w-60 md:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          />
        </form>

        {/* Toggle Sidebar Icon for Small Screens */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-5">
          <NavLink
            to="/"
            className="relative text-black font-semibold hover:text-gray-700 duration-200 group"
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/favorites"
            className="relative text-black font-semibold hover:text-gray-700 duration-200 group"
          >
            Favorites
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/"
            className="relative text-black font-semibold hover:text-gray-700 duration-200 group"
          >
            LogIn
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/"
            className="relative text-black font-semibold hover:text-gray-700 duration-200 group"
          >
            SignUp
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-64 h-full z-10 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <span className="text-2xl font-semibold">Menu</span>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex flex-col gap-5 text-lg">
          <NavLink
            to="/"
            className="text-black font-semibold hover:text-gray-700 hover:bg-red-100 px-5 py-1 duration-200"
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="text-black font-semibold hover:text-gray-700 hover:bg-red-100 px-5 py-1 duration-200"
            onClick={toggleSidebar}
          >
            Favorites
          </NavLink>
          <NavLink
            to="/"
            className="text-black font-semibold hover:text-gray-700 hover:bg-red-100 px-5 py-1 duration-200"
            onClick={toggleSidebar}
          >
            LogIn
          </NavLink>
          <NavLink
            to="/"
            className="text-black font-semibold hover:text-gray-700 hover:bg-red-100 px-5 py-1 duration-200"
            onClick={toggleSidebar}
          >
            SignUp
          </NavLink>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
