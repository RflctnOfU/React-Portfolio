import { NavLink } from "react-router-dom";
import { FaPenNib, FaFileAlt, FaCode, FaUserAlt } from "react-icons/fa";
function Nav() {
  const activeStyle = {
    color: "#3730a3",
    textShadow: "4px 5px 4px #292524",
  };

  return (
    <div className="w-full shadow-xl">
      <div className="md:flex items-center justify-between py-4 bg-gradient-to-br from-sky-500 to-indigo-600 md:h-32 h-auto">
        <div>
          <span
            className="antialiased text-4xl font-bold pl-4"
            style={{ textShadow: "2px 5px 4px #312e81" }}
          >
            Kristofer Marshall
          </span>
        </div>
        <ul className="md:flex md:items-center">
          <li
            className=" px-2 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold"
            style={{ textShadow: "2px 5px 3px #312e81" }}
          >
            <span>
              <FaUserAlt className="inline pr-2" size={20} />
              <NavLink
                to="/React-Portfolio/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </span>
          </li>
          <li
            className=" px-2 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold"
            style={{ textShadow: "2px 5px 3px #312e81" }}
          >
            <span>
              <FaCode className="inline pr-2" size={20} />
              <NavLink
                to="/React-Portfolio/portfolio"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Portfolio
              </NavLink>
            </span>
          </li>
          <li
            className=" px-2 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold inline"
            style={{ textShadow: "2px 5px 3px #312e81" }}
          >
            <span>
              <FaPenNib className="inline pr-2" size={20} />
              <NavLink
                to="/React-Portfolio/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </span>
          </li>
          <li
            className=" px-2 pr-4 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold"
            style={{ textShadow: "2px 5px 3px #312e81" }}
          >
            <span>
              <FaFileAlt className="inline pr-2" size={18} />
              <NavLink
                to="/React-Portfolio/resume"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Resume
              </NavLink>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
