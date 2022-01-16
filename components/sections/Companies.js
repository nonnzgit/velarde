import React from 'react';
import { ScCompanies } from '../../styles/companies';
import { Container, Row } from 'react-bootstrap';
import company1 from '../../public/company-1.jpg';
import company2 from '../../public/company-2.jpg';
import company3 from '../../public/company-3.jpg';
import company4 from '../../public/company-4.jpg';
import company5 from '../../public/company-5.jpg';
import company6 from '../../public/company-6.jpg';
import company7 from '../../public/company-7.jpg';
import company8 from '../../public/company-8.jpg';
import company9 from '../../public/company-9.jpg';
import company10 from '../../public/company-10.jpg';
import company11 from '../../public/company-11.jpg';
import company12 from '../../public/company-12.jpg';
import company13 from '../../public/company-13.jpg';
import company14 from '../../public/company-14.jpg';
import company15 from '../../public/company-15.jpg';
import company16 from '../../public/company-16.jpg';
import company17 from '../../public/company-17.jpg';
import company18 from '../../public/company-18.jpg';
import company19 from '../../public/company-19.jpg';
import company20 from '../../public/company-20.jpg';

// SWIPER REACT
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';
import Image from 'next/image';

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
                  <Image src={company1} alt="company 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company2} alt="company 2" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company3} alt="company 3" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company4} alt="company 4" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company5} alt="company 5" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company6} alt="company 6" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company7} alt="company 7" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company8} alt="company 8" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company9} alt="company 9" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company10} alt="company 10" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company11} alt="company 11" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company12} alt="company 12" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company13} alt="company 13" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company14} alt="company 14" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company15} alt="company 15" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company16} alt="company 16" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company17} alt="company 17" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company18} alt="company 18" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company19} alt="company 19" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Image src={company20} alt="company 20" />
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
