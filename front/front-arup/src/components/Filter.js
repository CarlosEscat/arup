import React, { useState, useEffect } from "react";

const Filter = ({ documents }) => {
  return (
    <div className="Filter">
      <label>Filters</label>
      <hr />
      <p>Disciplines</p>
      <div>
        <input type="checkbox" id="land" name="land" />
        <label for="land"> Land Survey</label>
      </div>
      <div>
        <input type="checkbox" id="Environmental" name="Environmental" />
        <label for="Environmental"> Environmental</label>
      </div>
      <div>
        <input type="checkbox" id="Geothechnical" name="Geothechnical" />
        <label for="Geothechnical"> Geothechnical</label>
      </div>
      <div>
        <input type="checkbox" id="Water" name="Water" />
        <label for="Water"> Water & Sewer Supply</label>
      </div>
      <div>
        <input type="checkbox" id="Utilities" name="Utilities" />
        <label for="Utilities"> Utilities</label>
      </div>
      <div>
        <input type="checkbox" id="Hazard" name="Hazard" />
        <label for="Hazard"> Hazard Vulnerability</label>
      </div>
      <br />
      <hr />
      <p>Status</p>
      <div>
        <input type="checkbox" id="request" name="request" />
        <label for="request"> Request to answer</label>
      </div>
      <div>
        <input type="checkbox" id="accept" name="accept" />
        <label for="accept"> Answers to accept</label>
      </div>
      <div>
        <input type="checkbox" id="closed" name="closed" />
        <label for="closed"> Closed requests</label>
      </div>
      <br />
      <hr />
      <p>Critical</p>
      <div>
        <input type="checkbox" id="critical" name="critical" />
        <label for="critical"> Critical</label>
      </div>
      <div>
        <input type="checkbox" id="not" name="not" />
        <label for="not"> Not critical</label>
      </div>
    </div>
  );
};

export default Filter;
