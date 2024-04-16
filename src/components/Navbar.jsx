import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Home</NavLink>

                            <NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Update Profile</NavLink>
                            <NavLink to='/userprofile' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>User Profile</NavLink>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>About</NavLink>
                            <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3' : 'font-extrabold'}>Contact Us</NavLink>
                            <div className="navbar-end gap-3 lg:hidden">
                                <a className="btn bg-green-400 text-white lg:text-xl">Sign In</a>
                                <a className=" btn lg:text-xl">Sign Up</a>
                            </div>
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl">PropHaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>Home</NavLink>

                        <NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>Update profile</NavLink>
                        <NavLink to='/userprofile' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>User Profile</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>About</NavLink>
                        <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border border-green-500 text-green-400 px-3 text-xl font-bold' : 'font-bold text-xl'}>Contact Us</NavLink>

                    </ul>
                </div>

                <div className="navbar-end hidden sm:block lg:flex lg:gap-2">
                    <NavLink to='/signin' className="btn bg-green-400 text-white lg:text-xl mr-5">Sign In</NavLink>
                  
                </div>


            </div>


        </div>

    );
};

export default Navbar;