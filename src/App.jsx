import React, { useState } from "react";
import Header from "./components/Header";
import AccordionItems from "./components/AccordionItems";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [activeContent, setActiveContent] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div className="flex-grow flex flex-col md:flex-row">
        <AccordionItems isActiveOn={setActiveContent} />
        <MainContent activeContent={activeContent} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
