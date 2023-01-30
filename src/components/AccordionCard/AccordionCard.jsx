import React, { useState } from "react";
import "../../App.css";
import AccordionItem from "../AccordionItem";
import styles from "./accordionCard.module.css";

export default function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);
  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  };

  const items = [
    {
      itemNumber: 1,
      title: "Accordion 1 title",
      content: "ravi ragaca 1 "
    },
    {
      itemNumber: 2,
      title: "Accordion 2 title",
      content: "ravi ragaca 2 "
    },
    {
      itemNumber: 3,
      title: "Accordion 3 title",
      content: "ravi ragaca 3 "
    },
    {
      itemNumber: 4,
      title: "Accordion 4 title",
      content: "ravi ragaca 4 "
    },
  ]

  return (
    <div className={styles.cardContainer}>
        <AccordionItem 
          activeAccordionNumber ={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={1}
          title = "Accordion title"
          content = "22222"
        />
        <AccordionItem 
          activeAccordionNumber ={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={2}
          title = "Accordion title"
          content = "22222"
        />
        <AccordionItem 
          activeAccordionNumber ={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={3}
          title = "Accordion title"
          content = "22222"
        />
        <AccordionItem 
          activeAccordionNumber ={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={4}
          title = "Accordion title"
          content = "22222"
        />
    </div>
  );
}
