import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from "./AccordionItems.module.css";

export default function AccordionItems({ isActiveOn }) {
  function handleClick(event, key) {
    let element = event.currentTarget;
    element.classList.toggle("active");
    isActiveOn(key);
  }

  return (
    <Accordion className="max-w-[400px]">
      <AccordionItem key="1" className={styles.accordionItems} aria-label="Accordion 1" title="Article 1">
        <span onClick={(e) => handleClick(e, 1)} className="control1 px-3 py-3 rounded-lg transition-all duration-500 ease-in-out hover:bg-sky-500 focus:bg-sky-700 active:bg-sky-800">
          This is the article one dude
        </span>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Article 2">
        <span className="control2" onClick={(e) => handleClick(e, 2)}>
          This is the article two my dude
        </span>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Article 3">
        <span className="control3" onClick={(e) => handleClick(e, 3)}>
          This is the article three my super dude
        </span>
      </AccordionItem>
    </Accordion>
  );
}
