import React from 'react'
import styles from "./Subjects.module.scss"
import Accordion from './Accordion'


const Subjects: React.FC = () => {
  return (
    <>
      <section className={styles.subjects}>
        <div className={styles.inner}>
          <Accordion semester={1} />
          <Accordion semester={2} />
          <Accordion semester={3} />
          <Accordion semester={4} />
          <Accordion semester={5} />
          <Accordion semester={6} />
          <Accordion semester={7} />
          <Accordion semester={8} />
        </div>
      </section>
    </>
  )
}

export default Subjects