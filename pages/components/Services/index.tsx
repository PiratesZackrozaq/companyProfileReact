import React from 'react';
import ServiceCard from '../Helper/ServiceCard';

const Services = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
            <div className='text-center'>
                <p className='heading__mini'>Our Services</p>
                <h1 className='heading__primary'>Why choose BlackpearlVPN<span className='text-yellow-300'>Services</span></h1>
            </div>
            <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
                <div>
                    <ServiceCard title="Super Security Encryption" num="01" />
                </div>
                <div>
                    <ServiceCard title="Powerful Trusted Server" num="02" />
                </div>
                <div>
                    <ServiceCard title="No Tracking Log" num="03" />
                </div>
            </div>
        </div>
    )
}

export default Services