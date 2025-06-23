import React from 'react'
import styles from "./Premuim.module.scss"
import english from "@/assets/images/langs/English_language.svg.png"
import russian from "@/assets/images/langs/Flag_of_Russia.svg.png"
import korean from "@/assets/images/langs/Flag_of_South_Korea.svg"
import chinese from "@/assets/images/langs/Flag_of_the_People's_Republic_of_China.svg.webp"
import german from "@/assets/images/langs/Flag_of_Germany.svg.webp"

const PremuimCouse: React.FC = () => {
  return (
    <>
      <div className={styles['premuim-couse']}>
        <div className={styles.inner}>
          <div className={styles['course-box']}>
            <img src={english} alt="" />
            <div className={styles.body}>
              <p className={styles.title}>English</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt!
              </p>
            </div>
          </div>
          <div className={styles['course-box']}>
            <img src={russian} alt="" />
            <div className={styles.body}>
              <p className={styles.title}>Русский язык</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt!
              </p>
            </div>
          </div>

          <div className={styles['course-box']}>
            <img src={korean} alt="" />
            <div className={styles.body}>
              <p className={styles.title}>한국어</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt!
              </p>
            </div>
          </div>

          <div className={styles['course-box']}>
            <img src={chinese} alt="" />
            <div className={styles.body}>
              <p className={styles.title}>漢語</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt!
              </p>
            </div>
          </div>

          <div className={styles['course-box']}>
            <img src={german} alt="" />
            <div className={styles.body}>
              <p className={styles.title}>Deutsch</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PremuimCouse