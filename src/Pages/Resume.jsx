
import { GiGraduateCap } from "react-icons/gi";
const Resume = () => {
    return (
        <>
           <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

           <div className="p-[20px] border-b-[0.3px] border-gray-700">
                <h1 className="text-[20px] font-semibold text-white"><span className="text-amber-600 animate-pulse">R</span>ESUME</h1>
            </div>
            <div className="p-[25px] flex flex-col lg:flex-row items-center gap-3 justify-center w-[200px] mx-auto border-b-[1px] border-gray-600 pb-0">
                <h1 className="w-[40px] h-[40px] border-[2px] text-center text-[35px] border-amber-500 text-amber-500 rounded-full"><GiGraduateCap /></h1> <h1 className="uppercase text-[25px] font-bold animate-pulse text-white">Education</h1>
            </div>
            <div className="flex items-center border-b-[1px] border-gray-700 ">
                <div className="w-[50%] border-r-[1px] border-gray-700 pt-[40px] pb-[20px]">
                    <h1 className="text-center text-[15px] text-stone-500 border-[1px] border-stone-400 w-[100px] mx-auto" >2018-2023</h1>
                    <h1 className="text-center text-[20px] font-bold text-stone-500 pt-3">National University</h1>
                    <h1 className="text-center text-[16px] font-bold text-stone-600 pt-2">Bangladesh</h1>
                    <h1 className="text-center text-[16px] font-bold text-stone-600 pt-2">Here I complete Bachelor of Science in ECE</h1>
                    <a className="text-center text-[18px] font-bold text-white flex justify-center pt-2" href="">Certificate</a>
                </div>

                <div className="w-[50%] pt-[40px] pb-[20px]">
                    <h1 className="text-center text-[15px] text-stone-500 border-[1px] border-stone-400 w-[100px] mx-auto" >2023-2024</h1>
                    <h1 className="text-center text-[20px] font-bold text-stone-500 pt-3">Programming Courses</h1>
                    <h1 className="text-center text-[16px] font-bold text-stone-600 pt-2">Programming Hero</h1>
                    <h1 className="text-center text-[16px] font-bold text-stone-600 pt-2">Here I learn Full Stack Web Development</h1>
                    <a className="text-center text-[18px] font-bold text-white flex justify-center pt-2" href="">Certificate</a>
                </div>
            </div>
           </div>
        </>
    );
};

export default Resume;