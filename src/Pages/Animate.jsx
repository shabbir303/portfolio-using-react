import { useEffect } from "react";
import Typed from "typed.js";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Animate = () => {
    useEffect(() => {
        const typed = new Typed(".input", {
          strings: [ "Freelancer","Front-end Developer", "Programmer", ],
          typeSpeed: 70,
          backSpeed: 60,
          loop: true,
        });
    
        // Cleanup the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []); 
    return (
        <div>
            <span className="input flex justify-center border-none text-[18px] font-[500] text-orange-400 text-center mx-auto "></span>
            <div className="flex justify-center gap-3 items-center text-center text-white text-[17px]">
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