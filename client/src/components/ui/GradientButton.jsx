import React from 'react';

const GradientButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`gradient-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;