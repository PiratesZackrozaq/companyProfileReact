import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StarIcon, SparklesIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

type resultProps = {
  email: string;
  name: string;
  picture: string;
  large: string;
  phone: string;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const TeamSlider = () => {
  const [result, setResult] = useState<resultProps[]>([]);


  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://randomuser.me/api/?results=6", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0} // means to render carousel on server-side.
      arrows={true}
      infinite
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      itemClass="item"
    >
      {result.map((value, idx) => {
        return (
          <div key={idx} className='m-2  hover:bg-gray-700 transition-all duration-300 rounded-lg'>
            <div className='border-2 p-4 border-gray-700 rounded-xl'>
              <Image
                src={value.picture.large}
                alt='user'
                width={70}
                height={70}
                className='rounded-full mx-auto mt-[2rem]'
              />
              <div>
                <SparklesIcon className='w-[6rem] h-[6rem] text-white opacity-15 fixed' />
              </div>
              <div className='flex items-center space-x-1 justify-center mt-[0.4rem]'>
                <StarIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
                <StarIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
                <StarIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
                <StarIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
              </div>
              <div>
                <SparklesIcon className='w-[6rem] right-0 h-[6rem] text-white opacity-15 fixed' />
              </div>
              <h1 className='text-[20px] text-center text-white mt-[2rem] font-medium'>{value.email}</h1>
              <h1 className='text-[20px] text-center text-white mt-[2rem] font-medium'>{value.phone}</h1>
              <p className='text-yellow-400 text-[18px] text-center mb-[3rem]'>{value.name.first} {value.name.last}</p>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
};

export default TeamSlider;