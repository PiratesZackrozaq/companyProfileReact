<<<<<<< HEAD
import React, { useState } from 'react';
import TeamSlider from '../Helper/TeamSlider';
import NavCompMobile from '../NavCompMobile';
import NavComp from '../NavComp';
import Footer from '../Footer';

const AboutTeam = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="overflow-hidden">
      <NavCompMobile showNav={showNav} closeNav={closeNavHandler} />
      <NavComp openNav={showNavHandler} />
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
      <Footer />
    </div>
  )
}

=======
import React, { useState } from 'react';
import TeamSlider from '../Helper/TeamSlider';
import NavCompMobile from '../NavCompMobile';
import NavComp from '../NavComp';
import Footer from '../Footer';

const AboutTeam = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="overflow-hidden">
      <NavCompMobile showNav={showNav} closeNav={closeNavHandler} />
      <NavComp openNav={showNavHandler} />
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
      <Footer />
    </div>
  )
}

>>>>>>> 6abee01e2e8b72076424ab72356a91c5188a8870
export default AboutTeam