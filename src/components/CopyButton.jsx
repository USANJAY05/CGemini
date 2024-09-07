import React from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyButton = ({ targetId, title }) => {
  const copyToClipboard = () => {
    const element = document.getElementById(targetId);
    if (element) {
      // Create a range and select the content
      const range = document.createRange();
      range.selectNodeContents(element);
      
      // Remove any previously selected content
      const selection = window.getSelection();
      selection.removeAllRanges();
      
      // Add the new range to the selection
      selection.addRange(range);
      
      // Copy the selected content to clipboard
      try {
        document.execCommand('copy');
        alert('Text copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      
      // Clear selection
      selection.removeAllRanges();
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className='hover:bg-slate-700 text-white px-2 py-2 rounded flex items-center gap-2'
      title={title}
    >
      <FaCopy />
    </button>
  );
};

export default CopyButton;