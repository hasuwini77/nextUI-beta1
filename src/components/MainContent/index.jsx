import React from "react";
import { Articles } from "../../data/data";

const MainContent = ({ activeContent }) => {
  const content = Articles.find((article) => article.key === activeContent);

  return content ? <div className="max-w-[600px] p-2 bg-sky-500 rounded-lg mt-4">{content.content}</div> : <div className="max-w-[600px] p-2">Welcome Message</div>;
};

export default MainContent;
