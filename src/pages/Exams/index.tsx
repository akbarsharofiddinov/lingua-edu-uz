import React from 'react'
import styles from "./Exams.module.scss"
import { ClockLoader } from 'react-spinners'


const Exams: React.FC = () => {
  return (
    <>
      <div className={styles.exams}>
        <div className={styles.inner}>
          <ClockLoader size={80} color='#0582CA' />
          <p>Страница не работает</p>
        </div>
      </div>
    </>
  )
}

export default Exams