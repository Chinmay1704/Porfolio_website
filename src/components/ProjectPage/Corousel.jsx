/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./corousel.css";


function Corousel({ projects }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div
      className="Corousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="corousel_wrapper">
        {projects.map((proj, ind) => {
          return (
            <div
              key={ind}
              className={
                ind == current
                  ? "corousel_card corousel_card_active"
                  : "corousel_card"
              }
            >
              <img className="card_image" src={proj.image} alt="" />

              <div className="card_overlay">
                <h2 className="card_title">{proj.title}</h2>
              </div>
            </div>
          );
        })}

        <div className="corousel-left-btn" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="corousel-right-btn" onClick={slideRight}>
          &rsaquo;
        </div>

        <div className="corousel_pagination">
          {projects.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot_active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Corousel;
