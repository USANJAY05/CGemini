import React, { useState } from 'react';

const SpeechToText = ({ onTextDetected }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');

  const handleToggleListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          setTranscription((prev) => prev + result[0].transcript);
          if (onTextDetected) {
            onTextDetected(result[0].transcript);
          }
        } else {
          interimTranscript += result[0].transcript;
        }
      }
      setTranscription((prev) => prev + interimTranscript);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div>
      <button
        onClick={handleToggleListening}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${isListening ? 'bg-red-500' : ''}`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p className='mt-2'>{transcription}</p>
    </div>
  );
};

export default SpeechToText;