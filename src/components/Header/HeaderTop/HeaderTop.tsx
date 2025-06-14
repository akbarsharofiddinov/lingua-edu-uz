import React from 'react'
import styles from './HeaderTop.module.scss'
import { LiaTelegramPlane } from 'react-icons/lia'
import { FaInstagram } from 'react-icons/fa6'
import { RiMegaphoneFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'
import TimeBox from './TimeBox'

const HeaderTop: React.FC = () => {

  return (
    <>
      <section className={styles.headerTop}>
        <div className={styles.inner}>

          <TimeBox />

          <div className={styles.sociaLinks}>
            <a href='https://t.me/uzbekistan' target='_blank' rel='noopener noreferrer'>
              <LiaTelegramPlane />
            </a>
            <a href='https://www.instagram.com/uzbekistan/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
            <p><RiMegaphoneFill /></p>
            <p><CiGlobe /> Ру</p>
          </div>
        </div>
      </section >
    </>
  )
}

export default React.memo(HeaderTop, (prev, next) => {
  console.log("Comparing HeaderTop props", prev, next);
  return true; // Prevent re-render if props didn't change
});