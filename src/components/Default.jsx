import React, { useContext } from 'react';
import bot from '../assets/cat.png';
import useMobileSize from '../hooks/useMobileSize';
import { context } from '../context/context';
import Loading from './Loading';

const Default = ({ setType }) => {
  const {loading}=useContext(context)
  const isMobile = useMobileSize();

  return (
    <>{loading?(<Loading />):(
      <div className={`flex flex-col items-center gap-10 h-full ${isMobile ? 'mt-16' : 'mt-32'}`}>
      <img className="w-24 bg-white rounded-full" src={bot} alt="Bot" />
      <div className={`flex w-full gap-10 justify-center ${isMobile ? 'flex-col items-center gap-4' : ''}`}>
        <div 
          onClick={() => setType("Explain programming")} 
          className="w-2/3 p-3 border hover:bg-slate-800 rounded-lg flex items-center cursor-pointer">
          Explain programming
        </div>
        <div 
          onClick={() => setType("Explain about the internet")} 
          className="w-2/3 p-3 border hover:bg-slate-800 rounded-lg flex items-center cursor-pointer">
          Explain about the internet
        </div>
        <div 
          onClick={() => setType("Teach me Python")} 
          className="w-2/3 p-3 border hover:bg-slate-800 rounded-lg flex items-center cursor-pointer">
          Teach me Python
        </div>
      </div>
    </div>
    )}

    </>

  );
};

export default Default;