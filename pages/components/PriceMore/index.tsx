import React, { useState }  from 'react';
import NavCompMobile from '../NavCompMobile';
import NavComp from '../NavComp';
import PriceCard from '../Helper/PriceCard';

const Price = () => {

    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden">
            <NavCompMobile showNav={showNav} closeNav={closeNavHandler} />
            <NavComp openNav={showNavHandler} />
            <div className='pt-[5rem] pb-[3rem] bg-black'>
                <div className='text-center'>
                    <p className='heading__mini'>Pricing</p>
                    <h1 className='heading__primary'>Better <span>Price</span> For Your Business</h1>
                </div>
                <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]'>
                    <PriceCard
                        plane="Free Plan"
                        price="0$"
                        save="100%"
                        bg="bg-red-900"
                    />
                    <PriceCard
                        plane="Premium 1 Year Plan"
                        price="50$"
                        save="50%"
                        bg="bg-green-900"
                    />
                    <PriceCard
                        plane="Premium 2 Year Plan"
                        price="80$"
                        save="80%"
                        bg="bg-blue-900"
                    />
                </div>
            </div>
        </div>
    )
}

export default Price