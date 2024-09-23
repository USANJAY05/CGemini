import React, { useState } from 'react';
import contact from '../assets/contact.png';
import DropDown from './DropDown';
import useMobileSize from '../hooks/useMobileSize';
import useClickOutside from '../hooks/useClickOutside';

const Header = ({ sideBar, setSideBar }) => {
  const [dropDown, setDropDown] = useState(false);
  const isMobile = useMobileSize();
  const ref = useClickOutside(() => setDropDown(false));

  return (
    <header className={`p-3 px-8 pl-16 w-full flex items-center justify-between  dark:bg-black text-white`}>
      {dropDown && <DropDown ref={ref} setDropDown={setDropDown} dropDown={dropDown} />}
      <h1 className='p-1 text-3xl rounded font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent'>CGemini</h1>
      <ul className={`flex gap-4 items-center`}>
        <h1 className={`p-1 rounded bg-gradient-to-r from-green-500 to-red-500 ${isMobile && "hidden"}`}>Powered by Gemini</h1>
        <li><img src={contact} onClick={() => setDropDown(!dropDown)} className='w-10 h-10' /></li>
      </ul>
    </header>
  );
}

export default Header;