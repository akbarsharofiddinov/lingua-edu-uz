import React, { useEffect } from 'react'
import styles from './HeaderTop.module.scss'
import { LiaTelegramPlane } from 'react-icons/lia'
import { FaInstagram } from 'react-icons/fa6'
import { RiMegaphoneFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'

const HeaderTop: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <section className={styles.headerTop}>
        <div className={styles.inner}>
          <div className={styles.timeBox}>
            <p>{currentTime.toLocaleDateString()}</p>
            <p>{currentTime.toLocaleTimeString()}</p>
          </div>
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

export default HeaderTop