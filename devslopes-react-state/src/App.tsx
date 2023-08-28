import React, { useState } from "react";
import "./App.css";

const images = [
  { 
    title: "pic 1",
    Image:
      "https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/Getty_NicolasCage.jpg",
    description: "This is first image of the slide",
  },
  {
    title: "pic 2",
    Image:
      "https://i.guim.co.uk/img/media/8a6be86d24d7195434dff8856b8f586e07af0a20/1156_500_3583_2150/master/3583.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b79d44135211ef48aa51fc41bdf181da",
    description: "This is second image of the slide",
  },
  {
    title: "pic 3",
    Image:
      "https://the-talks.com/wp-content/uploads/2014/08/Nic-Cage-thumb-a.jpg",
    description: "This is third image of the slide",
  },
];

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentImage = images[slideIndex];
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === images.length - 1;

  const increment = () => {
    setSlideIndex(slideIndex + 1);
  };

  const decrement = () => {
    setSlideIndex(slideIndex - 1)
  };

  return (
    <>
      <div className="carousel">
        <div className="image-container">
          <img src={currentImage.Image} alt="" />
          <h3>{currentImage.title}</h3>
          <p>{currentImage.description}</p>
        </div>
        <div className="controls">
          <button
            onClick={() => {
              decrement();
            }}
            disabled={isFirst}
          >
            Previous
          </button>
          <button
            onClick={() => {
              increment();
            }}
            disabled={isLast}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
