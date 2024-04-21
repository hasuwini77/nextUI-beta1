import React, { useState } from "react";
import Header from "./components/Header";
import AccordionItems from "./components/AccordionItems";
import MainContent from "./components/MainContent";

function App() {
  const [activeContent, setActiveContent] = useState(null);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div className="flex flex-col md:flex-row">
        <AccordionItems isActiveOn={setActiveContent} />
        <MainContent activeContent={activeContent} />
      </div>
    </>
  );
}

export default App;
