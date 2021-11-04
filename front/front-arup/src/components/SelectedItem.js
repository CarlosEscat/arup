import React, { useEffect, useState } from "react";
import closed from "../media/closed.png";
import answered from "../media/answered.png";
import submited from "../media/submited.png";
import criticalImage from "../media/critical.png";

const SelectedItem = ({ documents, itemId }) => {
  console.log(itemId);
  console.log(documents);

  const item = documents.find((i) => i.num == itemId);
  console.log(item);

  function myFunction() {
    return function () {
      let x = document.getElementById("Div4");
      if (x.style.display === "none") {
        x.style.display = "inline-block";
      } else {
        x.style.display = "none";
      }
    };
  }

  return (
    <div className="SelectedDoc">
      <p className="SelDiscipline">{item.discipline}</p>
      <button className="CloseButton" onClick={myFunction()}>
        X
      </button>
      <p className="SelSub">{item.subject} </p>
      <p className="SelSent">Sent to: {item.sentTo.name}</p>
      <p>
        <img className="ImageStatusSel" src={submited} key="ImageCardSel" />
        <img
          className="ImageCriticalSel"
          src={criticalImage}
          key="ImageCritSel"
        />
      </p>
      <hr className="HrSel" />
      <p className="SelRes">Request</p>
      <label className="SelName">
        {item.sentTo.name}({item.sentTo.company}){" "}
      </label>
      <label className="SelDate"> Date</label>
      <p className="SelMess">{item.message}</p>
      <hr className="HrSel" />
      <button className="ButAnswer">Answer request</button>
    </div>
  );
};

export default SelectedItem;
