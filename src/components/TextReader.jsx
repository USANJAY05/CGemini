// src/components/TextReader.js

import React, { useRef } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

const TextReader = ({ text }) => {
  const [isReading, setIsReading] = React.useState(false);
  const speechSynthesisRef = useRef(window.speechSynthesis);

  const startReading = () => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsReading(false);
      speechSynthesisRef.current.speak(utterance);
      setIsReading(true);
    }
  };

  const stopReading = () => {
    speechSynthesisRef.current.cancel();
    setIsReading(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={isReading ? stopReading : startReading}
        className={` hover:bg-slate-700 text-white p-1 rounded flex gap-2 items-center ${
          isReading ? 'text-red-500' : ''
        }`}
        title={isReading ? "Stop reading" : "Read aloud"}
      >
        {isReading ? <FiVolumeX className='text-xl' /> : <FiVolume2 className='text-xl'/>}
      </button>
    </div>
  );
};

export default TextReader;