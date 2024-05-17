import React from 'react';

const Button = ({ to, onClick, children }) => {
  return (
    <button
      className="bg-main rounded-lg text-white p-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
