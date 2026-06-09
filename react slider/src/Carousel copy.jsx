import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Carousel() {
  const [data, setData] = useState(list);
  const [activeSlide, setActiveSlide] = useState(0);

  function prevSlide() {
    setActiveSlide((prev) => (prev - 1 + data.length) % data.length);
  }
  function nextSlide() {
    setActiveSlide((prev) => (prev + 1) % data.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <section className="slider-container">
      <ul>
        {data.map(({ id, image, name, title, quote }, index) => (
          <li
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - activeSlide)}%)`,
              opacity: index === activeSlide ? 1 : 0,
              visibility: index === activeSlide ? "visible" : "hidden",
            }}
          >
            <article>
              <img className="person-img" src={image} alt={name} />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          </li>
        ))}
      </ul>
      <button className="prev" onClick={prevSlide}>
        <FaArrowCircleLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FaArrowCircleRight />
      </button>
    </section>
  );
}
