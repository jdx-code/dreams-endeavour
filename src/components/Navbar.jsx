import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/companyLogo.png'

const Navbar = () =>{

    const [nav, setNav] = useState(false);

    const activeLink = "text-blue-200"
    
    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div>
            <div id="navbar" className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white">                
                <div>
                    <NavLink to="/">
                        <img className="w-[120px] my-8 sm:w-[100px] md:w-[100px] items-start" src={Logo} alt="/" />
                    </NavLink>                    
                </div>               
                
                <ul className="hidden md:flex font-bold">
                    <li className="p-4">
                        <NavLink                         
                            to="/"    
                            className={({ isActive }) => isActive ? activeLink : ''}                    
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink                         
                            to="/about"                        
                            className={({ isActive }) => isActive ? activeLink : ''}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink                         
                            to="/courses"                        
                            className={({ isActive }) => isActive ? activeLink : ''}
                        >
                            Courses
                        </NavLink>
                    </li>                                    
                    <li className="p-4">
                        <NavLink
                            to="/contact"                        
                            className={({ isActive }) => isActive ? activeLink : ''}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}                
                </div>
                <div className={nav ? "fixed left-0 top-0 w-[85%] h-[96%] z-20 border-r border-r-gray-900 bg-[#1b0424] ease-in-out duration-500" : "fixed left-[-100%]"}>                    
                    <img className="w-[90px] items-start" src={Logo} />
                    
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/"
                                onClick={handleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/about"
                                onClick={handleNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/services"
                                onClick={handleNav}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/career"
                                onClick={handleNav}
                            >
                                Career
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink
                                to="/contact"
                                onClick={handleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Navbar;