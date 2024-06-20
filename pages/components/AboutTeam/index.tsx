import React from 'react';
import TeamSlider from '../Helper/TeamSlider';

const AboutTeam = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='text-center'>
        <p className='heading__mini'>Our Team</p>
        <h1 className='heading__primary'>Meet our <span className='text-yellow-300'>Team</span>
        </h1>
      </div>
      <div className='w-[80%] pt-[3rem] md:pt-[5rem] mx-auto'>
        <TeamSlider />
      </div>
    </div>
  )
}

export default AboutTeam