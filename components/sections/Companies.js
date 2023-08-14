import React from 'react';
import { ScCompanies } from '../../styles/companies';
import { Container, Row } from 'react-bootstrap';

// SWIPER REACT
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);

const Companies = () => {
  return (
    <ScCompanies id="companies">
      <Container>
        <Row style={{ justifyContent: 'center' }}>
          <h2
            bold="true"
            style={{ fontWeight: 600, fontSize: '1.2rem', textAlign: 'center' }}
          >
            Encontraremos{' '}
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              lo que necesitas
            </span>
            . Estas son algunas de nuestras{' '}
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              compañías
            </span>
            .
          </h2>
          <div className="container">
            <div className="swiper-container">
              <Swiper
                breakpoints={{
                  // when window width is >=
                  500: {
                    slidesPerView: 2,
                  },
                  770: {
                    slidesPerView: 3,
                  },
                  1000: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
                autoplay={{
                  delay: 10,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                speed={2000}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-1.jpg"
                    alt="company 1"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-2.jpg"
                    alt="company 2"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-3.jpg"
                    alt="company 3"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-4.jpg"
                    alt="company 4"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-5.jpg"
                    alt="company 5"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-6.jpg"
                    alt="company 6"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-7.jpg"
                    alt="company 7"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-8.jpg"
                    alt="company 8"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-9.jpg"
                    alt="company 9"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-10.jpg"
                    alt="company 10"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-11.jpg"
                    alt="company 11"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-12.jpg"
                    alt="company 12"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-13.jpg"
                    alt="company 13"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-14.jpg"
                    alt="company 14"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-15.jpg"
                    alt="company 15"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-16.jpg"
                    alt="company 16"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-17.jpg"
                    alt="company 17"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-18.jpg"
                    alt="company 18"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-19.jpg"
                    alt="company 19"
                    className="logoCompany"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="/company-20.jpg"
                    alt="company 20"
                    className="logoCompany"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Row>
      </Container>
    </ScCompanies>
  );
};

export default Companies;
