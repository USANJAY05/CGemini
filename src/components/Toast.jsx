import React from 'react';

const Toast = ({ message }) => {
    
    return (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg transition-all">
            <div className="flex items-center gap-2">
                {/* <div className="text-5xl font-semibold">☠</div> */}
                <div>{message}</div>
            </div>
        </div>
    );
};

export default Toast;