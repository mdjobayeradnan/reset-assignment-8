import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = (
        <>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? "text-green-500 font-bold px-2" : "px-2"
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink 
                to="/listedBooks" 
                className={({ isActive }) => 
                    isActive ? "text-green-500 font-bold px-2" : "px-2"
                }
            >
                <li>Listed Books</li>
            </NavLink>
            <NavLink 
                to="/pages" 
                className={({ isActive }) => 
                    isActive ? "text-green-500 font-bold px-2" : "px-2"
                }
            >
                <li>Pages to Read</li>
            </NavLink>
            <NavLink 
                to="/inspiring" 
                className={({ isActive }) => 
                    isActive ? "text-green-500 font-bold px-2" : "px-2"
                }
            >
                <li>Inspiring to Read</li>
            </NavLink>
            <NavLink 
                to="/review" 
                className={({ isActive }) => 
                    isActive ? "text-green-500 font-bold px-2" : "px-2"
                }
            >
                <li>Review</li>
            </NavLink>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        BOOK<span className="text-green-500">SHOP</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end gap-1.5">
                    <a className="btn bg-green-400 text-white">Sign In</a>
                    <a className="btn bg-green-500 text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
