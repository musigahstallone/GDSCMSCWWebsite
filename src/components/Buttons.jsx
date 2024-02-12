import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({ text, icon, link }) => {
  const buttonStyles = "bg-gradient-to-b from-red to-yellow text-white font-semibold rounded-md px-2 py-2 items-center justify-center";

  return (
    link ? (
      <Link to={link} className={buttonStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
        <span className="ml-2 font-bold">&gt;</span>
      </Link>
    ) : (
      <button className={buttonStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
        <span className="ml-2 font-bold">&gt;</span>
      </button>
    )
  );
};

export default Buttons;
