import React, { useEffect, useState } from "react";
import axios from "axios";

const Page1 = () => {
  const [title, setTitle] = useState();
  const [reviews, setReviews] = useState();
  const [reviewPosition, setReviewPosition] = useState(0);

  const getInfo = async () => {
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

  const reviewController = (position) => {
    if (reviews?.length === undefined) return <></>;
    else
      return (
        <>
          <div className="reviewContainer">
            <div className="reviewTitleContainer">
              <div className="reviewName">{reviews[position]?.name}</div>
              <div className="reviewPosition">
                {reviews[position]?.position}
              </div>
            </div>
            <div className="review">{reviews[position]?.comment}</div>
          </div>
        </>
      );
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="page-1">
        <div className="titlePage1">
          <h1>{title}</h1>
        </div>
        <div className="reviewOverride">
          {reviewController(reviewPosition)}
          <div className="reviewController">
            <div className="reviewCount">
              {reviewPosition + 1}/{reviews?.length}
            </div>
            <div
              className="reviewArrows"
              onClick={() =>
                reviewPosition - 1 < 0
                  ? ""
                  : setReviewPosition(reviewPosition - 1)
              }
            >
              v
            </div>
            <div
              className="reviewArrows"
              onClick={() =>
                reviewPosition < reviews?.length - 1
                  ? setReviewPosition(reviewPosition + 1)
                  : ""
              }
            >
              v
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
