/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const Navlink = () => {
        return (
            <div className="flex  flex-col lg:flex-row justify-center items-center lg:gap-0 gap-2"  >
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"}
                >
                    Home
                </NavLink>
                <li tabIndex={0}>
                    <details>
                        <summary>Admin</summary>
                        <ul className="p-4 text-black absolute glass flex flex-col gap-4 rounded-lg">
                            <NavLink
                                to={`/addProduct`}
                                className={({ isActive, isPending }) =>
                                    isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"
                                }
                            >
                                Add Product
                            </NavLink>
                            <NavLink
                                to={`/update`}
                                className={({ isActive, isPending }) =>
                                    isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"
                                }
                            >
                                Update
                            </NavLink>
                        </ul>
                    </details>
                </li>
                <NavLink
                    to={`/award`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"}
                >
                    Awards
                </NavLink>
                <NavLink
                    to={`/aboutUS`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"}
                >
                    About US
                </NavLink>
                <NavLink
                    to={`/news`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"}
                >
                    News
                </NavLink>
                <NavLink
                    to={`/contactUs`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"}
                >
                    Contact US
                </NavLink>
            </div>
        )
    }
    const MiniNavlink = () => {
        return (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0" >
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Honda
                </NavLink>
                <NavLink
                    to={`/toyota`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Toyota
                </NavLink>
                <NavLink
                    to={`/audi`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Audi
                </NavLink>
                <NavLink
                    to={`/nissan`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Nissan
                </NavLink>
                <NavLink
                    to={`/mercedes`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Mercedes-Benz
                </NavLink>
                <NavLink
                    to={`/nmw`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    BMW
                </NavLink>
                <NavLink
                    to={`/chevrolet`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Chevrolet
                </NavLink>
            </div>
        )
    }
    return (
        <div>
            <div className="navbar bg-blue-900 p-2 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-gray-200 rounded-box text-start w-40">
                            <div className="flex flex-col justify-center items-center" >
                                <div>
                                    {
                                        <Navlink></Navlink>
                                    }
                                </div>
                                <div className="mt-2 w-fit" >
                                    <li tabIndex={0}>
                                        <details>
                                            <summary>Brands</summary>
                                            <ul className=" text-black absolute glass flex flex-col p-2 rounded-lg">
                                                {
                                                    <MiniNavlink></MiniNavlink>
                                                }
                                            </ul>
                                        </details>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <a
                        style={{
                            fontFamily: 'Lobster'
                        }}
                        className=" md:text-3xl text-xl text-white">SignatureDrive</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {
                            <Navlink></Navlink>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="glass rounded-full w-14 " src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" alt="" />
                    <img className="glass rounded-full w-14 hidden" src="https://cdn-icons-png.flaticon.com/128/552/552721.png" alt="" />
                </div>
            </div>
            <div className="text-blue-800 bg-gray-200 font-semibold  hidden lg:flex items-center justify-center" >
                {
                    <MiniNavlink></MiniNavlink>
                }
            </div>
        </div>

    )
};
// <li><a>Item 1</a></li>
{/* <li tabIndex={0}>
    <details>
        <summary>Parent</summary>
        <ul className="p-2 text-black ">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul>
    </details>
</li>  */}
// <li><a>Item 3</a></li>
export default NavBar;