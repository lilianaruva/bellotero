import React, { useEffect, useState } from "react";
import axios from "axios";
import InputRange from "react-input-range";

const Page2 = () => {
  const [value, setValue] = useState(0);
  const [employees, setEmployees] = useState(1);
  const [title, setTitle] = useState();
  const [resume, setResume] = useState();

  const getInfo = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json"
      )
      .then((response) => {
        const res = response.data.calculator;
        setTitle(res.title);
        setResume(res.description);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="page-2">
        <div className="sectionLeft">
          <div className="titlePage2">
            <h1>
              <span>{title}</span>
            </h1>
          </div>
          <div className="resumeBellotero">{resume}</div>
        </div>
        <div className="section">
          <div className="row rangeInputContainer">
            <div className="col rangeTitle">Monthly ingredient spending</div>
            <div className="dobleInput">
              <input type="text" id="subdomain" value="$" disabled />
              <input
                type="text"
                id="subdomaintwo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <div className="row rangeContainer">
            <InputRange
              draggableTrack={false}
              allowSameValues={false}
              step={1}
              minValue={0}
              maxValue={100}
              value={value}
              onChange={setValue}
              onChangeComplete={(args) => console.log(args)}
            />
          </div>
          <div className="row rangeInputContainer">
            <div className="col rangeTitle">
              Full-time employees that process invoices
            </div>
            <input
              type="text"
              className="fullTimeInput"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
            />
          </div>
          <div className="row rangeContainer">
            <InputRange
              draggableTrack={false}
              allowSameValues={false}
              step={1}
              minValue={0}
              maxValue={10}
              value={employees}
              onChange={setEmployees}
              onChangeComplete={(args) => console.log(args)}
            />
          </div>
          <div className="row">
            <div className="col estimateTitle">
              <p>$</p>
              {employees}
            </div>
            <div className="col estimateTitle">
              <p>$</p>
              {value}
            </div>
          </div>
          <div className="row">
            <div className="col estimateSubtitle">
              Estimated cost food savings
            </div>
            <div className="col estimateSubtitle">
              Your estimated annual savings
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
