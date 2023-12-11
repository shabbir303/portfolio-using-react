import { useEffect } from "react";
import Typed from "typed.js";


const Animate = () => {
    useEffect(() => {
        const typed = new Typed(".input", {
          strings: [ "freelancer","Front-end Developer", "Programmer", ],
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
            <span className="input border-none  text-[15px] font-[500] text-orange-400 text-center mx-auto "></span>
        </div>
    );
};

export default Animate;