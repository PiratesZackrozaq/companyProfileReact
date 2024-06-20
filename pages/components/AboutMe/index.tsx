import React, { useState } from 'react';
import { CheckIcon, PhoneIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid';
import NavCompMobile from '../NavCompMobile';
import NavComp from '../NavComp';
import AboutTeam from '../AboutTeam';
import Footer from '../Footer';

const AboutMe = () => {

    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden">
            <NavCompMobile showNav={showNav} closeNav={closeNavHandler} />
            <NavComp openNav={showNavHandler} />
            <div className='mt-[-4rem] bg-black pb-[3rem]'>
                <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                    <div>
                        <p className='heading__mini'>About Us</p>
                        <h1 className='heading__primary'>Securing Your <span className='text-yellow-400'>
                            Connections</span>
                        </h1>
                        <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                            Here at Blackpearl VPN, we understand the importance of online privacy and security. In today's digital world, your data is constantly at risk. That's where our innovative VPN profile solutions come in.

                            We are a team of passionate developers and security experts dedicated to creating user-friendly and reliable VPN profiles. Our mission is to empower individuals and businesses alike to browse the internet with confidence, knowing their data is encrypted and protected.
                        </p>
                        <div className='mt-[2rem] space-y-3'>
                            <div className='flex items-center space-x-4'>
                                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                                <p className='text-[18px] text-white'>Secure</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                                <p className='text-[18px] text-white'>Easy to Use</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                                <p className='text-[18px] text-white'>Versatile</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                                <p className='text-[18px] text-white'>Reliable</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:ml-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                            <div className='p-6 text-center bg-yellow-500'>
                                <p className='text-[50px] text-black font-bold'>21</p>
                                <p className='text-[20px] text-black font-600'>Year of experience</p>
                            </div>
                            <div className='p-6 text-center bg-yellow-500'>
                                <p className='text-[50px] text-black font-bold'>590+</p>
                                <p className='text-[20px] text-black font-600'>Users</p>
                            </div>
                            <div className='p-6 text-center bg-yellow-500'>
                                <p className='text-[50px] text-black font-bold'>90+</p>
                                <p className='text-[20px] text-black font-600'>Locations</p>
                            </div>
                            <div className='p-6 text-center bg-yellow-500'>
                                <p className='text-[50px] text-black font-bold'>80+</p>
                                <p className='text-[20px] text-black font-600'>Server</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutTeam />
            <Footer />
        </div>
    )
}

export default AboutMe