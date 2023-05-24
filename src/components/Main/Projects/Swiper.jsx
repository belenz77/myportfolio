import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
export default function Slider() {
    return (
      <>
<Swiper
effect={"coverflow"}
grabCursor={true}
centeredSlides={true}
slidesPerView={"auto"}
coverflowEffect={{
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
}}
pagination={true}
navigation={true}
modules={[EffectCoverflow, Pagination , Navigation]}
className="mySwiper mb-7"
>
<SwiperSlide>
    <a href="https://seo-bird-life-front.vercel.app/" target="_blank">
  <img src="https://i.postimg.cc/dQbZvsp8/Fire-Shot-Capture-010-Seo-Bird-Life-seo-bird-life-front-vercel-app.png" />
  </a>
</SwiperSlide>
<SwiperSlide>

<a href="https://proyecto-react-lac.vercel.app/" target="_blank">
  <img src="https://i.postimg.cc/q7tcvbJY/ogilvy.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
<a href="https://arandi.es/" target="_blank">
  <img src="https://i.postimg.cc/7PcbVsXm/Arandi-Marketing-Team-Working-www-arandi-es.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
<a href="https://navidad-grupo4.vercel.app/" target="_blank">
  <img src="https://i.postimg.cc/ncyjHRDC/Fire-Shot-Capture-005-Christmas-is-You-Nosotras-belenz77-github-io.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
<a href="https://vinil-art.vercel.app/" target="_blank">
  <img src="https://i.postimg.cc/CxbZdGGJ/Vinil-Art-Conectando-generaciones-vinil-art-vercel-app.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
    <a href="https://tanjiro.vercel.app/" target="_blank">
  <img src="https://i.postimg.cc/nzhMdN6w/Fanjiro-Animation-belenz77-github-io.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
<a href="https://mediatoolstv.com/" target="_blank">
  <img src="https://i.postimg.cc/mrYsXsbF/mediatoolstv.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
<a href="https://casasalnorte.com/" target="_blank">
  <img src="https://i.postimg.cc/SK9PTMcH/cn.png" />
  </a>
</SwiperSlide>
<SwiperSlide>
  <img src="https://i.postimg.cc/zvpjYrNW/cortefiel-zumita-es.png" />
</SwiperSlide>
</Swiper>
</>
  );
}