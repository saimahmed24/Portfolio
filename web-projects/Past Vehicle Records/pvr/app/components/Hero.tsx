
const Hero = () => {
    return (
        <div id="home" className="relative h-screen">

            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex items-center lg:justify-start lg:text-left text-white justify-center text-center ">
                <div className="lg:w-[50%] w-[90%] flex flex-col">
                    <h1 className="font-bold text-center lg:text-left font-serif lg:text-4xl md:text-2xl mx-8 ">
                        Be Wise and Verify in Advance. Let&apos;s Examine the History of Your Car.
                    </h1>
                    <p className="mx-8 py-4 lg:text-2xl md:text-lg text-xs "> Let&apos;s Verify Your Car History is a global service that aims to enhance transparency in the used car market and promote road safety on a global scale by providing comprehensive vehicle histories.</p>
                    <p className="mx-8 font-bold ">Get A VIN Check With Check Your Vehicle</p>
                    <div className="flex gap-1">
                        <input className="ml-8 w-72" type="text" />
                        <button className="w-16 h-8 text-sm md:w-24 md:h-10 md:text-base bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
                            Button
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;