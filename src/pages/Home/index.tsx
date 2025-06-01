import React from 'react'
import { Banner } from '@/components'
import styles from "./Home.module.scss"
import question from "@/assets/images/home-content/26.png"
import attendances from "@/assets/images/home-content/attendance.png"
import contract from "@/assets/images/home-content/contract.png"
import curriculum from "@/assets/images/home-content/curriculum.png"
import document from "@/assets/images/home-content/documents.png"
import exams from "@/assets/images/home-content/exams.png"
import messages from "@/assets/images/home-content/messages.png"
import performance from "@/assets/images/home-content/performance.png"
import resources from "@/assets/images/home-content/resources.png"
import subjectChoose from "@/assets/images/home-content/subject-choose.png"
import timeTable from "@/assets/images/home-content/timetable.png"

const data = [
  {
    id: 1,
    name: 'Экзамены',
    image: question
  },
  {
    id: 2,
    name: 'Посещаемость',
    image: attendances
  },
  {
    id: 3,
    name: 'Контракт',
    image: contract,
  },
  {
    id: 4,
    name: 'Учебная программа',
    image: curriculum,
  },
  {
    id: 5,
    name: 'Документ',
    image: document,
  },
  {
    id: 6,
    name: 'Экзамены',
    image: exams,
  },
  {
    id: 7,
    name: 'Сообщения',
    image: messages,
  },
  {
    id: 8,
    name: 'Ведомость',
    image: performance,
  },
  {
    id: 9,
    name: 'Ресурсы',
    image: resources,
  },
  {
    id: 10,
    name: 'Выбор предмета',
    image: subjectChoose,
  },
  {
    id: 11,
    name: 'Расписание',
    image: timeTable
  }
]

const Home: React.FC = () => {
  return (
    <>
      <div className={styles['home-page']}>
        <Banner />
        <div className={styles.content}>
          {data.map((item, index) => (
            <div key={index} className={styles['cart-item']}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home