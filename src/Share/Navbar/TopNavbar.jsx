
import { useContext } from "react";
import {
    FaGift, FaRegUser,
} from "react-icons/fa";

import { GiSelfLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const TopNavbar = () => {

    const { user, logOutUser } = useContext(AuthContext);




    const profileLogo = user?.email[0].toUpperCase();

    const handlaeLogout = () => {
        logOutUser()
    }

    return (
        <section className="fixed z-30 px-3 py-3 text-white bg-orange-500 navbar lg:px-8 md:px-4">
            <div className="container flex items-center justify-between gap-2 mx-auto">
                <h3 className="font-mono italic font-bold border-b-2 lgl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">MegaMart</h3>
                <h2 className="items-center hidden text-base md:text-xl lg:text-xl lgl:block lg:block lg:pl-5">Available 24/7</h2>
                <div className="w-3/12 md:w-4/12 lg:w-5/12 lgl:w-5/12">
                    <label className="flex items-center h-6 gap-2 rounded-full lg:h-12 md:h-8 sml:h-8 bg-gray-50 input input-bordered">
                        <input type="text" className="w-8 text-xs text-black grow" placeholder="Search " />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-full text-orange-500 w-7 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div>
                    <div className="flex gap-4 md:gap-8">
                        <Link to={"/wishlist"}>
                            <h2 className="flex flex-col items-center gap-1 text-xs">
                                <GiSelfLove className="text-xl lg:text-2xl" />
                                Wish List
                            </h2>
                        </Link>
                        <Link to={"/gifts"}>
                            <p className="flex flex-col items-center gap-1 text-sm">
                                <FaGift className="text-xl lg:text-2xl" />
                                Gift Cards

                            </p>
                        </Link>
                        <Link to="/carts">
                            {/* <p className="flex flex-col items-center gap-1 text-sm">
                                <IoCartOutline className="text-2xl" />
                                Cart
                                <span className={`inline-block px-3 py-1 text-sm font-semibold text-red-800 bg-orange-100 rounded-full`}>
                                    {"text"}
                                </span>
                            </p> */}
                            <div className="relative">

                                <IoCartOutline className="text-xl lg:text-2xl" />

                                <span className="absolute px-2 py-1 text-xs font-bold text-white bg-black rounded-full -top-2 -right-2">
                                    0
                                </span>
                                Cart

                            </div>
                        </Link>

                        {
                            user && user ?


                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <p className="flex items-center justify-center w-10 h-10 p-1 font-bold text-center text-white bg-purple-500 rounded-full">
                                            {profileLogo}

                                        </p>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content space-y-3 text-black bg-slate-200 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                                        <li><a>Profile</a></li>
                                        <li><a>Settings</a></li>
                                        <li className="text-red-500"><button onClick={handlaeLogout}>LogOut</button></li>
                                    </ul>
                                </div>
                                :
                                <Link to={"/signin"}>
                                    <p className="flex flex-col items-center gap-1 text-sm">
                                        <FaRegUser className="text-xl lg:text-2xl" />
                                        Sign In

                                    </p>
                                </Link>


                        }


                    </div>
                </div>
            </div>

        </section>
    );
};

export default TopNavbar;