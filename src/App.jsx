import React, { useState } from "react";
import Header from "./components/Header";
import AccordionItems from "./components/AccordionItems";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import NewCard from "./components/Card";
import { motion } from "framer-motion";

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
      <div className="flex flex-row justify-center">
        <motion.div animate={{ y: [-10, 10, -10], x: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }}>
          <NewCard />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
