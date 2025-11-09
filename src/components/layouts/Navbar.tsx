import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Salefni</span>
                </NavLink>

                <ul className="flex items-center gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-gray-900"
                                    : "text-gray-600 hover:text-gray-900"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/simulator"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-medium transition ${isActive
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                }`
                            }
                        >
                            Simulator
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;