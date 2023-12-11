// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";

const Main = () => {
    return (
        <div className=" flex  ">
            <Navbar></Navbar>
            <div className="w-[500px] h-[700px] my-[100px] border-[1px] ml-[20px] rounded-xl bg-black  text-white">
                <div className='overflow-hidden rounded-lg has-shadow '>
                    <img src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                        className='aspect-video h-[350px] rounded-b-[150px]'
                        alt='' />
                        <div>
                            <img src="https://github.com/settings/profile" alt="" />
                        </div>
                    <div className='p-4 flex flex-col gap-2 z-10  bg-black h-[350px] '>
                        <div className='text-xs'>
                            Ricco Xie • 1 June 2023
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Sira team talk
                        </h3>
                        <div className='text-sm'>
                            <p>
                                🕹 Customizable and 😍 accessible design system which provides TailwindCSS component className name library to build
                                modern UI. 💥
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <span className='badge light info'>
                                Design
                            </span>
                            <span className='badge light primary'>
                                Product
                            </span>
                            <span className='badge light danger'>
                                Developer
                            </span>
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