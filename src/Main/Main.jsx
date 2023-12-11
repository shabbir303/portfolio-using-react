// import React from 'react';


import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import img from '../assets/sabbir.png'
const Main = () => {
    return (
        <div className=" flex font-lekton ">
            <Navbar></Navbar>
            <div className="relative w-[500px] h-[700px] my-[100px] border-[1px] ml-[20px] rounded-xl bg-stone-800  text-white">
                <div className='overflow-hidden rounded-lg has-shadow '>
                    <img src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                        className='aspect-video h-[350px] rounded-b-[100px] z-10'
                        alt='' />
                    <div className="absolute flex justify-center items-center mx-auto left-[170px]  rounded-full  border-black top-[250px] shadow-xl shadow-orange-300">
                        <img src={img} alt="" className="rounded-full h-[170px] bg-amber-500 w-[150px] border-[3px] border-black" />
                    </div>
                    <div className='p-4 flex flex-col gap-2 pt-[100px]  text-center  h-[350px] '>

                        <h3 className='text-2xl font-bold'>
                            Shabbir Hossain
                        </h3>
                        <div className='text-sm'>
                            <p>
                                🕹 Customizable and 😍 accessible design system which provides TailwindCSS component className name library to build
                                modern UI. 💥
                            </p>
                        </div>
                        
                        <div className="mt-[85px] flex border-t-[1px] border-orange-300 justify-between items-center py-[20px]">
                            
                            <h1 className="text-white text-center border-r-[1px] border-orange-300 w-[50%]">Download CV</h1>
                            <h1 className="text-white text-center  w-[50%]">Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[800px] h-[500px] border-[1px] my-auto rounded-xl ml-[20px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;