

const About = () => {
    return (
        <>
         <div className="p-[20px] border-b-[0.3px] border-gray-700  ">
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
        </>
    );
};

export default About;