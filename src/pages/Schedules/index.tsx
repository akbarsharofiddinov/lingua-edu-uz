import React from 'react'
import styles from "./Schedules.module.scss"
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

const Schedules: React.FC = () => {
  return (
    <>
      <div className={styles.schedules}>
        <div className={styles.inner}>
          <div className={styles['schedule-card']}>
            <div className={styles.top}>
              <p>понедельник</p>
              <p>14 апреля, 2025</p>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <p>1 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>2 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>3 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['schedule-card']}>
            <div className={styles.top}>
              <p>понедельник</p>
              <p>14 апреля, 2025</p>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <p>1 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>2 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>3 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['schedule-card']}>
            <div className={styles.top}>
              <p>понедельник</p>
              <p>14 апреля, 2025</p>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <p>1 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>2 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>3 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['schedule-card']}>
            <div className={styles.top}>
              <p>понедельник</p>
              <p>14 апреля, 2025</p>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <p>1 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>2 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>3 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['schedule-card']}>
            <div className={styles.top}>
              <p>понедельник</p>
              <p>14 апреля, 2025</p>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <p>1 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>2 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.item}>
                <p>3 - пара: Lorem, ipsum.</p>
                <div>
                  <p>Лекция / Александр И. П.</p>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.pagination}>
          <p>Выберите неделю</p>

          <RangePicker picker='week' placeholder={['начало', 'окончание']} />
        </div>
      </div>
    </>
  )
}

export default Schedules