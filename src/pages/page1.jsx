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
      </div>
    </>
  );
};

export default Page1;
