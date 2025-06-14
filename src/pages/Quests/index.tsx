import React, { useState } from 'react'
import styles from "./Quests.module.scss"
import { QuestModal } from '@/components';

const Quests: React.FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={styles.quests}>
        <div className={styles.inner}>
          <div className={styles['subject-box']}>
            <div className={styles.top}>
              <p>Lorem, ipsum.</p>
              <p>180 час | 6.0 кредит</p>
            </div>
            <div className={styles.body}>
              <p><span>Ресурсы</span> <span>34</span></p>
              <p onClick={() => setModal(true)}><span>Задания</span> <span>0/2</span></p>
            </div>
          </div>

          <div className={styles['subject-box']}>
            <div className={styles.top}>
              <p>Lorem, ipsum.</p>
              <p>180 час | 6.0 кредит</p>
            </div>
            <div className={styles.body}>
              <p><span>Ресурсы</span> <span>34</span></p>
              <p onClick={() => setModal(true)}><span>Задания</span> <span>0/2</span></p>
            </div>
          </div>

          <div className={styles['subject-box']}>
            <div className={styles.top}>
              <p>Lorem, ipsum.</p>
              <p>180 час | 6.0 кредит</p>
            </div>
            <div className={styles.body}>
              <p><span>Ресурсы</span> <span>34</span></p>
              <p onClick={() => setModal(true)}><span>Задания</span> <span>0/2</span></p>
            </div>
          </div>
        </div>
      </div>

      {modal ? <QuestModal setModal={setModal} /> : ''}
    </>
  )
}

export default Quests