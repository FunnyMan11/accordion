import React from "react";

export default function AccordionItem(props) {
  const { handleClick, activeAccordionNumber, itemNumber, title, content } = props;

  return (
    <div>
      <div
        onClick={() => {
          handleClick(itemNumber);
        }}
      >
        {title}
        {activeAccordionNumber === itemNumber ? <p>{content}</p> : null}
      </div>
    </div>
  );
}
