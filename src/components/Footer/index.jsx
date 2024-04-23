import React from "react";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center min-h-[200px]">
      <p> Copyright ® {currentYear} Edwin Andermyr </p>
    </div>
  );
};

export default Footer;
