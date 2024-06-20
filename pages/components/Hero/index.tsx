import React from 'react';
import TypeWriterEffect from '../Helper/TypeWriterEffect';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='w-[100vw] pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
                    <div>
                        <h1 className='text-[#c4cfde] mb-[1.3rem]'>Welcome</h1>
                        <div>
                            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold leading-normal text-white'>
                                The key to online security with <span className='text-yellow-100'>BlackPearlVPN.</span>
                            </h1>
                            <TypeWriterEffect />
                        </div>
                        <p className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
                            Unleash a world of unrestricted content and browse with complete anonymity. Our cutting-edge encryption safeguards your data, shielding you from online threats and prying eyes.
                        </p>
                        <div className='mt-[2rem] flex items-center space-x-6'>
                            <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                                <span className='relative z-10'>Get Started</span>
                            </button>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <Image src="/images/pirate.jpg" alt="pirate" width={600} height={600} className='object-contain' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero