import React from 'react'
import styles from "./Quests.module.scss"
import { ClockLoader } from 'react-spinners'

const Quests: React.FC = () => {
  return (
    <>
      <div className={styles.quests}>
        <div className={styles.inner}>
          <ClockLoader size={80} color='#0582CA' />
          <p>Страница не работает</p>
        </div>
      </div>
    </>
  )
}

export default Quests