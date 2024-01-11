// import React from 'react';
import { FaUser } from "react-icons/fa6";
import { FaRectangleList } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css"

const Navbar = () => {
    const styles = {
        // other styles
        background: "white",
        // other styles
    };

    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    return (
        <div>
            <div className="flex  lg:ml-[300px] font-lekton uppercase lg:mt-[200px] border-[1px] border-black w-full lg:w-20 gap-5 bg-black lg:py-[15px] rounded-xl flex-row lg:flex-col lg:justify-between  ">
                <div>
                    <div className=" lg:inline-flex h-16 w-16 items-center justify-center">
                        <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 font-bold">
                            SH
                        </span>
                    </div>

                    <div className="border-t ">
                        <div className="px-2">
                            {/* <div className="py-4">
                                <a
                                    href=""
                                    className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 "
                                    >
                                        General
                                    </span>
                                </a>
                            </div> */}

                            <ul className="space-x-4 lg:space-y-1  border-t border-gray-700 py-4 flex flex-row lg:flex-col">
                                {/* <li className="space-y-1 lg:space-y-0 sm:border-t lg:border-0 border-gray-700 lg:border-none py-4 lg:py-0">
                  <NavLink
                    className={styles}
                    to="/"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "900" : "",
                        color: isActive ? "red" : "gray",
                        fontSize: isActive ? "20px" : "16px",
                        background: isActive ? " white" : "none",
                        // textDecoration: isActive ? "underline" : '',
                        // fontFamily: isActive ? '':'',
                        // fontSize: isActive ?"20px":'18px',
                        // fontStyle: isActive ?'italic':''
                      };
                    }}
                  >
                    <span className="space-y-1 border-gray-700 pb-4  flex justify-center items-center lg:flex-col text-center ">
                      <FaUser />
                      About
                    </span>
                  </NavLink>
                </li> */}

                                <li><NavLink className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white' to='/'>
                                    <span className="space-y-1 border-gray-700 pb-4  flex justify-center items-center lg:flex-col text-center ">
                                        <FaUser />
                                        About
                                    </span>
                                </NavLink></li>

                                <li className="space-y-1 border-t border-gray-700 py-4">
                                    <NavLink
                                        to="/resume"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "red" : "gray",
                                                // textDecoration: isActive ? "underline" : '',
                                                // fontFamily: isActive ? '':'',
                                                fontSize: isActive ? "20px" : "16px",
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >
                                        <span className="space-y-1 border-gray-700 pb-4  flex justify-center items-center lg:flex-col gap-2 text-center  ">
                                            <FaRectangleList />
                                            Resume
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="space-y-1 border-t border-gray-700 py-4">
                                    <NavLink
                                        to="/skills"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "red" : "gray",
                                                // textDecoration: isActive ? "underline" : '',
                                                // fontFamily: isActive ? '':'',
                                                fontSize: isActive ? "20px" : "16px",
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >
                                        <span className="space-y-1 border-gray-700 pb-4  flex justify-center items-center lg:flex-col gap-2 text-center ">
                                            <GiSkills />
                                            Skills
                                        </span>
                                    </NavLink>
                                </li>

                                <li className="space-y-1 border-t border-gray-700 py-4">
                                    <NavLink
                                        to="/works"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "red" : "gray",
                                                // textDecoration: isActive ? "underline" : '',
                                                // fontFamily: isActive ? '':'',
                                                fontSize: isActive ? "20px" : "16px",
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >
                                        <span className="space-y-1 border-gray-700 pb-4  flex justify-center items-center flex-row lg:flex-col gap-2 text-center ">
                                            <FaEye />
                                            Works
                                        </span>
                                    </NavLink>
                                </li>

                                <li className="space-y-1 border-t border-gray-700 py-4">
                                    <NavLink
                                        to="/blog"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "red" : "gray",
                                                // textDecoration: isActive ? "underline" : '',
                                                // fontFamily: isActive ? '':'',
                                                fontSize: isActive ? "20px" : "16px",
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >
                                        <span className="space-y-1 border-gray-700 pb-4  flex justify-center items-center flex-row lg:flex-col gap-2 text-center ">
                                            <FaBloggerB />
                                            Blog
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
