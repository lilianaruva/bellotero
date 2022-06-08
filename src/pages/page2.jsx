import React, { useState } from "react";

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
            <div className="col estimateSubtitle">
             
            </div>
            <div>
              <input type="text" id="subdomain" value="$" disabled />
              <input type="text" id="subdomaintwo" />
            </div>
          </div>
          <div className="row">
            <input class="range" type="range"></input>
          </div>
          <div className="row">
            <div className="col estimateTitle">
              <p>$</p>8.611
            </div>
            <div className="col estimateTitle">
              <p>$</p>36.611
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
