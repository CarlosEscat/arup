import React, { useEffect, useState } from "react";
//import * as request from "superagent";
import "./App.css";
import Filter from "./components/Filter";
import SelectedItem from "./components/SelectedItem";
import List2 from "./components/List2";

const apiEndpoint = "http://localhost:3000";
const App = () => {
  const [documents, setDocuments] = useState([]);
  const [itemId, setItemId] = useState(1);
  console.log("ID " + itemId);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setDocuments(jsonResponse);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <label className="Title">ARUP</label>
      </header>
      <div className="Structure">
        <div className="div1">
          <Filter documents={documents} />
        </div>
        <div className="div2">
          <List2 documents={documents} test={(num) => setItemId(num)} />
        </div>
        <div className="div4" id="Div4">
          <SelectedItem documents={documents} itemId={itemId} />
        </div>
      </div>
    </div>
  );
};

export default App;
