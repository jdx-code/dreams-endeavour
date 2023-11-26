import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return(
        <div className='footerClass bg-[#f7d852] text-gray-800'>
            <div className='w-full max-w-[95%] m-auto p-4 md:pt-8 grid md:grid-cols-6'>
                <div className='w-full max-w-[95%] text-xs font-bold mb-8 col-span-4 md:border-r-2 md:border-blue-200'>
                    <p className='font-bold text-lg pb-3 underline'>Quick Links</p>
                    <div className='grid grid-cols-6 '>                
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>                            
                                <li className='pb-2'>                                    
                                    <Link
                                        to="/#hero"                                                                                                                                
                                    >
                                        Home
                                    </Link>                                                    
                                </li>
                                <li className='pb-2'>
                                    <Link
                                        to="/about"                                                                                         
                                    >
                                        About Us
                                    </Link>                                                                                        
                                </li>                                
                                <li className='pb-2'>
                                    <NavLink
                                        to="/#objectives"                                                                                            
                                    >
                                        Objectives
                                    </NavLink>                                                                                                                            
                                </li>
                            </ul>
                        </div>  
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>     
                                <li className='pb-2'>
                                    <NavLink
                                        to="/courses#payments"                                                    
                                    >
                                        Payments
                                    </NavLink>                                    
                                </li>                       
                                <li className='pb-2'>
                                    <NavLink
                                        to="/#aifest"                                                    
                                    >
                                        AIFEST
                                    </NavLink>                                    
                                </li>                               
                            </ul>
                        </div> 
                        <div className='col-span-6 sm:col-span-2'>
                            <ul>
                                <li className='pb-2'>
                                    <Link
                                        to="/#courses"                                                    
                                    >
                                        Spoken English
                                    </Link>                                                                                                                                                                
                                </li> 
                                <li className='pb-2'>
                                    <Link
                                        to="/#courses"                                                    
                                    >
                                        Personality Development
                                    </Link>                                                                                                                                                                
                                </li>                            
                                <li className='pb-2'>
                                    <Link
                                        to="/#courses"                                                    
                                    >
                                        Interview Skills
                                    </Link>                                                                                                                                                                                                    
                                </li>
                            </ul>
                        </div>             
                    </div>
                </div>
                
                <div className='grid grid-cols-4 col-span-2 text-xs font-bold mb-8'>                    
                    <div className='col-span-3'>
                        <p className='font-bold text-lg pb-3 underline'>Reach Us</p>
                        <p className='pb-1'>Rehabari</p>
                        <p className='pb-1'>Guwahati-781008</p>
                        <p className='pb-1'>Assam, India</p>
                        {/* <p className='pb-1'>+91-9707038551</p> */}
                        <p className='pb-1'>namratatalukdar38551@gmail.com</p>                    
                    </div>
                    {/* <div className='col-span-1 grid justify-items-end items-center'>
                        <ul>
                            <li className='pb-4'>
                                <a href="https://twitter.com/zephyrsolx"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.linkedin.com/in/zephyrsolutionsgroup/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.facebook.com/zephyrsolutionsgroup"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://github.com/zephyrsolutions"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a>
                            </li>
                        </ul>
                    </div>                     */}
                </div>                        
            </div>        
            <div className='w-full'>
                <p className='text-center text-xs'>Dreams Endeavour &#169; {currentYear} | All rights reserved. </p>                           
                <p className='text-center pb-4 text-xs'>Developed by <a href ="https://www.zephyrsolutionsgroup.com/">Zephyr Solutions</a></p>                           
            </div>    
            
        </div>        
    )
}

export default Footer;