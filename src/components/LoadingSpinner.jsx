import React from 'react';

const Loading = () => {
  return (
    <div className="flex top-1 absolute right-6">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;