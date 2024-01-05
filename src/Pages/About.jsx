
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
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
        < >
            <div  data-aos="zoom-in-right">
            <div className="p-[20px] border-b-[0.3px] border-gray-700  " >
                <h1 className="text-[20px] font-semibold text-white"><span className="text-amber-600">A</span>bout Me</h1>
            </div>
            <div className="p-[25px]">
                <h1 className="text-[18px] text-neutral-500  font-semibold">Hello! I’m Shabbir Hossain.</h1>
                <p className="text-[18px]  text-neutral-400"> Front-end developer from Dhaka, Bangladesh.As a front-end developer, my primary responsibility is to create the user interface and user experience of a website or web application. This involves translating design concepts into functional and visually appealing web pages by using languages like HTML, CSS, and JavaScript. My role is crucial in enhancing the overall usability and interactivity of the digital products you work on & I eager to learn new teachnologies that improves my productivity.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 uppercase p-[25px] text-neutral-400">
                <h1>Age. . . . 24</h1>
                <h1>RESIDENCE . . . . Bangladesh</h1>
                <h1>Freelance . . . . available</h1>
                <h1>address . . . . Dhaka, Bangladesh </h1>
            </div>
            </div>
           
        </>
    );
};

export default About;