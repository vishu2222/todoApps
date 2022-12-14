import { useState } from "react";
import "./TodoFooter.css";

export default function TodoFooter({ showOptions, deleteCompleted }) {
  const [buttonName, setButtonName] = useState("Show Completed");

  function handleClick(buttonTxt) {
    if (buttonTxt === "Show Completed") setButtonName("Show pending");
    if (buttonTxt === "Show pending") setButtonName("Show All");
    if (buttonTxt === "Show All") setButtonName("Show Completed");
    showOptions(buttonTxt);
  }

  return (
    <div className="footer">
      <button onClick={(e) => handleClick(e.target.textContent)}>
        {buttonName}
      </button>
      <button className="delCompleted" onClick={deleteCompleted}>
        DeleteCompleted
      </button>
    </div>
  );
}
