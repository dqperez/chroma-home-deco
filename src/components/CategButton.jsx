import React from 'react';

const CategButton = ({ png, title, onClick, isActive }) => {
  return (
    <div className="flex flex-col items-center pt-2">
      <button
        className={`bg-${isActive ? 'gray' : 'disabled'} p-2 rounded-lg`}
        onClick={onClick}>
        <img src={png} alt={title} className="w-8 h-8" />

      </button>
      <label className="text-sub text-xs p-2">{title}</label>
    </div>
  );
};

export default CategButton;
