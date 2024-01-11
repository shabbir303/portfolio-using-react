// import { useEffect } from "react";
// import Typed from "typed.js";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
const Animate = () => {
   
  return (
    <div >
      <span className=" flex justify-center border-none text-[18px] font-[500] text-orange-400 text-center mx-auto ">

        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            'Freelancer', // initially rendered starting point
            1000,
            'Front-end Developer', //
            1000,
            'Programmer', //
            1000,
          ]}
          speed={30}
          // style={{ fontSize: '18px' }}
          repeat={Infinity}
        />
      </span>
      <div className="flex justify-center gap-3 items-center text-center text-white text-[17px] mt-2">
        <a href="https://www.instagram.com/sagorhossain195/"><FaInstagram /></a>
        <a href="https://twitter.com/ShabbirShovo"><FaXTwitter /></a>
        <a href="https://github.com/shabbir303"><FaGithub /></a>
        <a href="https://wa.me/+8801788482775"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/shabbir-hossain-a5bb7a1a3/"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Animate;