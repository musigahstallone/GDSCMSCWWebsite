// Button.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, icon, link }) => {
  const buttonStyles = "bg-gradient-to-r from-red to-yellow text-white rounded-md px-4 py-2 flex items-center justify-center";

  return (
    link ? (
      <Link to={link} className={buttonStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </Link>
    ) : (
      <button className={buttonStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    )
  );
};

export default Button;
