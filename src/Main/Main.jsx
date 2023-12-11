// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";

const Main = () => {
    return (
        <div className=" flex  ">
            <Navbar></Navbar>
            <div className="w-[500px] h-[700px] my-[100px] border-[1px] ml-[20px] rounded-xl"></div>
            <div className="w-[800px] h-[500px] border-[1px] my-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;