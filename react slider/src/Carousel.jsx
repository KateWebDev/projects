import { useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export default function Carousel() {
  const [data, setData] = useState(list);

  return (
    <section className="slider-container">
      <Swiper spaceBetween={20} slidesPerView={1} slidePrevClass={1} modules={[Navigation]} loop={true}>
        {data.map(({ id, image, name, title, quote }, index) => (
          <SwiperSlide key={index}>
            <article>
              <img className="person-img" src={image} alt={name} />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
