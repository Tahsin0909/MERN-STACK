/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextApi/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
    const { user, SignOut } = useContext(AuthContext)
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
                        <summary><p>Admin</p></summary>
                        {/* <p>Admin</p> */}
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
                                to={`/action`}
                                className={({ isActive, isPending }) =>
                                    isActive ? "active border py-2 px-4 bg-transparent" : isPending ? "pending" : " px-4"
                                }
                            >
                                Actions
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
                    to={`/honda`}
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
                    to={`/mercedes-benz`}
                    className={({ isActive, isPending }) =>
                        isActive ? "active border p-1 px-4 bg-blue-900 text-white" : isPending ? "pending" : "p-1 px-4"}
                >
                    Mercedes-Benz
                </NavLink>
                <NavLink
                    to={`/bmw`}
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
            <div className="navbar bg-blue-900 ">
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
                    <div className="flex items-center" >
                        <a
                            style={{
                                fontFamily: 'Lobster',
                                fontWeight: "lighter"
                            }}
                            className=" md:text-3xl text-lg text-white ">SignatureDrive
                        </a>
                        <img className="md:w-24 h-fit w-20  relative right-10" src="https://i.ibb.co/VBjrY05/Untitled-design-1-removebg-preview.png" alt="Company Logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {
                            <Navlink></Navlink>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* User Dropdown */}
                    {
                        user.email ? (
                            <div className="dropdown dropdown-end text-black">
                                <label tabIndex={0} className=" m-1"><img className="md:w-12 w-10 rounded-full" src={user?.photoURL ? `${user.photoURL}` : "https://cdn-icons-png.flaticon.com/128/552/552721.png"} alt="" /></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-md w-60">
                                    <ul className="flex  items-center">
                                        <li><img className="w-20 " src={user?.photoURL ? `${user.photoURL}` : "https://cdn-icons-png.flaticon.com/128/552/552721.png"} alt="" />
                                        </li>
                                        <li className="">
                                            <p>{user.uid.slice(0, 10)}</p>
                                        
                                        </li>
                                    </ul>
                                    <li><p>Email: {user.email}</p></li>
                                    <div className="flex gap-1 items-center pb-1 px-3">
                                        <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/628/628556.png" alt="" />
                                        <Link to={ `/myCart/${user.uid}`}>My Cart</Link>
                                    </div>
                                    <div className="flex gap-1 items-center py-1 px-3">
                                        <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/3106/3106798.png" alt="" />
                                        <Link onClick={() => { SignOut(), toast.info('Sign Out SuccessFull'); localStorage.removeItem('ShowToast') }}>Sign Out</Link>
                                    </div>
                                </ul>
                            </div>
                        ) :
                            (
                                <div className=" ">
                                    <Link to={'/signUp'}><img className="glass rounded-full md:w-12 w-10 " src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" alt="" /></Link>
                                </div>
                            )


                    }
                </div>
            </div>
            <div className="text-blue-800 bg-gray-200 font-semibold  hidden lg:flex items-center justify-center" >
                {
                    <MiniNavlink></MiniNavlink>
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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