import React, { useEffect, useState } from "react";
import axios from "axios";

const Page1 = () => {
  const [title, setTitle] = useState();
  const [reviews, setReviews] = useState();

  const getMenu = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json"
      )
      .then((response) => {
        const res = response.data.slider;
        setTitle(res.title);
        setReviews(res.reviews);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className="page-1">
        <div className="titlePage1">
          <h1>{title}</h1>
        </div>
        <div className="reviewContainer">
          <div className="reviewTitleContainer">
            <div className="reviewName">Pete Zahut</div>
            <div className="reviewPosition">Chef @ Maniak</div>
          </div>
          <div className="review">“It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"</div>
        </div>
      </div>
    </>
  );
};

export default Page1;
