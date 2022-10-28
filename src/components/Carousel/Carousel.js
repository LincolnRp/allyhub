import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import carousel1 from './../../assets/images/carousel-1.png'
import carousel2 from './../../assets/images/carousel-2.png'
import {DivContainer, DivCarousel1, DivCarousel2} from './style'
import { Button } from '@chakra-ui/react';

function Carousel() {

  return (

    <DivContainer>
        <Swiper className="mySwiper"
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 3500,
           disableOnInteraction: false,
         }}
         modules={[Autoplay]}>
        <SwiperSlide>
          <DivCarousel1>
          <img src={carousel1}></img>
          <div>
            <h1>Onde Quer Visitar ?</h1>
         <h2>Cadastre Seus Locais Favoritos</h2>
         </div>
         <button><a href='#form'>Cadastrar</a></button>
          </DivCarousel1>
        </SwiperSlide>
        <SwiperSlide>
        <DivCarousel2>
          <img src={carousel2}></img>
          <div>
        <h1>Ally Hub Trips</h1>
         <h2>Descubra Lugares Incríveis</h2>
         </div>
         <button><a href='#form'>Cadastrar</a></button>

        </DivCarousel2>
          </SwiperSlide>
      </Swiper>

    </DivContainer>

  )
}

export default Carousel