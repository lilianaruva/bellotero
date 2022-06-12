import React, { useState } from "react";
import InputRange from "react-input-range";

const Page2 = () => {
  const [value, setValue] = useState(0);

  const rangeSlide = () => {
    setValue(value + 1);
  };

  return (
    <>
      <div className="page-2">
        <div className="sectionLeft">
          <div className="titlePage2">
            <h1>
              <span>Save more with Bellotero.io</span>
            </h1>
          </div>
          <div className="reviewOverride">
            With Bellotero.io you save time and money make real-time decisions
            that boost your business and your bottom line. Get less wrongfully
            blocked payments, save time on bookkeeping and no need to worry
            about safety.{" "}
          </div>
        </div>
        <div className="section">
          <div className="row rangeContainer">
            <div className="col rangeTitle">Monthly ingredient spending</div>
            <div className="dobleInput">
              <input type="text" id="subdomain" value="$" disabled />
              <input type="text" id="subdomaintwo" value={value} />
            </div>
          </div>
          <div className="row rangeContainer">
            <div className="col rangeTitle">Monthly ingredient spending</div>
            <input type="text" className="fullTimeInput" value={value} />
          </div>
          <div className="row">
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
          <div className="row">
            <div className="col estimateTitle">
              <p>$</p>8.611
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
