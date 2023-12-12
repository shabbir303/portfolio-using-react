import { FaListUl } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
const Skills = () => {
    return (
        <>
            <div className="p-[20px] border-b-[0.3px] border-gray-700">
                <h1 className="text-[20px] font-semibold text-white"><span className="text-amber-600">S</span>KILLS</h1>
            </div>

            <div className="flex items-center  ">
                <div className="w-[50%] border-r-[1px] border-gray-700  pb-[20px]">
                    <div className="p-[25px] flex items-center gap-3   mx-auto border-b-[1px] border-gray-600 ">
                        <h1 className="w-[40px] h-[40px] border-[2px] text-center text-[35px] border-amber-500 text-amber-500 rounded-full"><IoCodeSlash className="p-[5px]"/></h1> <h1 className="uppercase text-[25px] font-bold text-white">Coding</h1>
                    </div>
                    <div className="w-[80%] mx-auto mt-[20px]">
                      <AiOutlineHtml5 className="text-[30px] text-yellow-600"/>
                        <progress className="progress colored warn  " value="80" max="100" />
                    </div>
                    <div className="w-[80%] mx-auto mt-[20px]">
                      <SiTailwindcss className="text-[30px] text-yellow-600"/>
                        <progress className="progress colored warn  " value="90" max="100" />
                    </div>
                    <div className="w-[80%] mx-auto mt-[20px]">
                      <FaReact className="text-[30px] text-yellow-600"/>
                        <progress className="progress colored warn  " value="70" max="100" />
                    </div>
                    <div className="w-[80%] mx-auto mt-[20px]">
                      <DiMongodb className="text-[30px] text-yellow-600"/>
                        <progress className="progress colored warn  " value="50" max="100" />
                    </div>
                    <div className="w-[80%] mx-auto mt-[20px]">
                      <FaNodeJs className="text-[30px] text-yellow-600"/>
                        <progress className="progress colored warn  " value="30" max="100" />
                    </div>
                   
                </div>

                <div className="w-[50%]  pb-[20px]">
                    <div className="p-[25px] flex items-center gap-3   mx-auto border-b-[1px] border-gray-600 ">
                        <h1 className="w-[40px] h-[40px] border-[2px] text-center text-[35px] border-amber-500 text-amber-500 rounded-full"><FaListUl className="p-[5px]" /></h1> <h1 className="uppercase text-[25px] font-bold text-white">knowledge</h1>
                    </div>
                    <div className="mt-[26px] w-[80%] mx-auto">
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">JavaScript</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Responsive Web Design</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Version Control/Git</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Command Line/CLI</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Front-End Frameworks</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Server-Side Frameworks</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Databases</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">RESTful APIs</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Build Tools</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Package Managers</h1> </p>
                        <p className="flex px-5  items-center gap-2"><TiTick className="text-amber-700 text-[20px]"/><h1 className="text-[20px] font-semibold text-stone-500">Browser Developer Tools</h1> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;