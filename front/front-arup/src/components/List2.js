import React, { useState, useEffect, useLayoutEffect } from "react";
import closed from "../media/closed.png";
import answered from "../media/answered.png";
import submited from "../media/submited.png";
import criticalImage from "../media/critical.png";

const List2 = ({ documents, test }) => {
  console.log(test);

  function renderTableData() {
    return documents.map((item, index) => {
      const {
        _id,
        num,
        discipline,
        regDate,
        sentTo,
        subject,
        status,
        critical,
      } = item;
      let date;
      let name = sentTo.name.split(/(\s+)/);
      let srcStatus;

      if (regDate.length > 10) {
        date = regDate.slice(0, 10);
      } else {
        date = regDate;
      }

      if (status == "closed") {
        srcStatus = closed;
      } else if (status == "answered") {
        srcStatus = answered;
      } else {
        srcStatus = submited;
      }

      function myFunction(num) {
        return function () {
          console.log("Row index is: " + num);
          let x = document.getElementById("Div4");
          if (x.style.display === "none") {
            x.style.display = "inline-block";
          }
        };
      }

      return (
        <tr
          className="Row"
          key={_id}
          onClick={myFunction(num)}
          onClick={() => test(num)}
        >
          <td className="RowNum">{num}</td>
          <td className="RowDis">{discipline}</td>
          <td className="RowDate">{date}</td>
          <td className="RowSent">{name[0].charAt(0) + ". " + name[2]}</td>
          <td className="RowSub">{subject}</td>
          <td className="RowStatus">
            <img
              className="ImageStatus"
              src={srcStatus}
              key={"ImageCard" + _id}
            />
          </td>
          <td className="RowCritical">
            {critical ? (
              <img
                className="ImageCritical"
                src={criticalImage}
                key={"ImageCritical" + _id}
              />
            ) : (
              ""
            )}
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="Results">
      <div className="div3">
        <table className="Lista1">
          <thead className="TableTitle">
            <th className="thNum">Num</th>
            <th>Discipline</th>
            <th>Reg. date</th>
            <th>Sent to</th>
            <th className="thSubject">Subject</th>
            <th>Status</th>
            <th className="thCritical">Critical</th>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default List2;
