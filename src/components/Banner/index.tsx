import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from "./Banner.module.scss"
import banner1 from "@/assets/images/banner-1.jpg"
import banner2 from "@/assets/images/library.jpg"
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'

const Banner: React.FC = () => {
  return (
    <>
      <section className={styles.sectionBanner}>
        <Swiper className={styles.swiper} loop autoplay={{ delay: 3000, disableOnInteraction: true }} modules={[Autoplay]}>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={banner2} alt="" />
            <Link to={"/e-library"} className={styles.library}>Больше</Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Banner