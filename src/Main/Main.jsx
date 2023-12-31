// import React from 'react';
import video from "../assets/video (2160p).mp4";
import video1 from "../assets/pexels-gamol-12973197 (1080p).mp4";
import video2 from "../assets/video (2160p) (1).mp4"
import video3 from "../assets/video (2160p) (2).mp4"
import bg from '../assets/blue-programming-code-background-abstract-footage-090894338_prevstill.webp'
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import img from '../assets/sabbir.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from "react";
import Animate from "../Pages/Animate";
const Main = () => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div className=" lg:flex font-lekton relative " >
            <div className="" >
                <video src={video3} autoPlay muted loop className="absolute top-0 left-0 w-full h-screen object-cover" />
            </div>
            <div className='fixed  sm:top-0 z-10 right-0 left-0 lg:relative'>
                <Navbar></Navbar>
            </div>
            <div className="relative w-full  lg:w-[500px] h-screen lg:h-[700px]  lg:my-[100px]  lg:ml-[20px] rounded-xl bg-stone-800  text-white shadow-xl shadow-slate-900 z-10">
                <div className='overflow-hidden rounded-lg has-shadow '>
                    <img src={bg}
                        className='aspect-video h-[400px] lg:h-[350px] rounded-b-[100px] z-10'
                        alt='' />
                    <div className="absolute flex justify-center items-center mx-auto left-[140px] lg:left-[170px]  rounded-full  border-black top-[250px] shadow-xl shadow-orange-300">
                        <img src={img} alt="" className="rounded-full h-[170px] bg-amber-500 w-[150px] border-[3px] border-black" />
                    </div>
                    <div className='p-4 flex flex-col gap-2 pt-[100px]  text-center  h-[350px] '>

                        <h3 className='text-3xl font-bold'>
                            Shabbir Hossain
                        </h3>

                        <Animate></Animate>


                        <div className="mt-[60px] flex border-t-[1px] border-orange-300 justify-between items-center py-[20px]">
                            <a className="text-white text-center  border-r-[1px] border-orange-300 w-[50%]" href="https://drive.google.com/u/0/uc?id=1QN5H4MuQOnb4S6c_2aA_bOuCKO8HmFTJ&export=download&format=xlsx"><h1 >Download CV</h1></a>

                            <Link className="text-white text-center  w-[50%]" to='/contact'><h1 >Contact</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[800px] lg:h-[500px]  bg-stone-800  my-auto rounded-xl overflow-scroll relative " data-aos="fade-right">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;