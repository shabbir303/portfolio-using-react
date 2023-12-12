import first from '../assets/cosmetic-project.png'
import second from '../assets/online-marketplace.png'
import third from '../assets/survey.png';
const Works = () => {
    return (
        <div>
            <div className="p-[20px] border-b-[0.3px] border-gray-700">
                <h1 className="text-[20px] uppercase  font-semibold text-white"><span className="text-amber-600">M</span>y works</h1>
            </div>
            <div className="grid grid-cols-3 gap-[10px] p-[20px]">
                <a href="#" className="block">
                    <img
                        alt="Signage"
                        src={first}
                        className="h-56 p-[10px] w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                    />

                    <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                        <a href="https://cosmeticbeauty-40dff.web.app/"><strong className="font-medium text-stone-400">Live Link</strong></a>   
                    </div>
                </a>
                <a href="#" className="block">
                    <img
                        alt="Signage"
                        src={second}
                        className="h-56 p-[10px] w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                    />

                    <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                        <a href="https://online-marketplace-1c947.web.app/"><strong className="font-medium text-stone-400">Live Link</strong></a>   
                    </div>
                </a>
                <a href="#" className="block">
                    <img
                        alt="Signage"
                        src={third}
                        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl p-[10px] object-cover sm:h-64 lg:h-72"
                    />

                    <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                        <a href="https://survey-polling-b02b9.web.app/"><strong className="font-medium text-stone-400">Live Link</strong></a>   
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Works;