// LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => (
  <div className="spinner absolute top-3 right-4">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
    <style jsx>{`
      .spinner {
        width: 70px;
        text-align: center;
      }

      .bounce1, .bounce2, .bounce3 {
        width: 18px;
        height: 20px;
        border-radius: 100%;
        background-color: white;
        display: inline-block;
        animation: bounce 1.4s infinite ease-in-out;
      }

      .bounce2 {
        animation-delay: -0.32s;
      }

      .bounce3 {
        animation-delay: -0.16s;
      }

      @keyframes bounce {
        0%, 80%, 100% {
          transform: scaleY(0.4);
        }
        40% {
          transform: scaleY(1.0);
        }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;