import React, { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface Props {
  openNav: () => void;
}

const NavComp = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false)
  useEffect(() => {

    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);
  const stickyCompStyle = navSticky ? `bg-[#212428] shadow-gray-900 shadow-sm` : ``

  return (
    <div className={`fixed w-[100%] ${stickyCompStyle} transition-all duration-300 z-[1000] `}>
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[14px]">
          <img src="/images/logocompany.svg" alt="" />
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <Link className="nav__link" href="/">Home</Link>
          <Link className="nav__link" href={{pathname: "/components/AboutMe"}}>About</Link>
          <Link className="nav__link" href={{pathname: "/components/PriceMore"}}>Prices</Link>
          <Link className="nav__link" href={{pathname: "/components/AboutTeamMore"}}>Our Team</Link>
        </ul>
        <Bars3Icon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180" />
      </div>
    </div>
  );
};

export default NavComp;