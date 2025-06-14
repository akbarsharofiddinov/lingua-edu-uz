import React from 'react'
import { Banner } from '@/components'
import styles from "./Home.module.scss"
import testo_game from "@/assets/images/home-content/exams.png"
import attendances from "@/assets/images/home-content/attendance.png"
import contract from "@/assets/images/home-content/contract.png"
import curriculum from "@/assets/images/home-content/curriculum.png"
import document from "@/assets/images/home-content/documents.png"
import exams from "@/assets/images/home-content/testo_game.png"
import messages from "@/assets/images/home-content/messages.png"
import performance from "@/assets/images/home-content/performance.png"
import resources from "@/assets/images/home-content/resources.png"
import subjectChoose from "@/assets/images/home-content/subjectChoice.png"
import timeTable from "@/assets/images/home-content/timetable.png"
import eBook from "@/assets/images/home-content/ebook_806156.png"
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    name: 'Тесто',
    image: testo_game,
    link: ""
  },
  {
    id: 2,
    name: 'Посещаемость',
    image: attendances,
    link: ""
  },
  {
    id: 3,  
    name: 'Отработка',
    image: contract,
    link: ""
  },
  {
    id: 4,
    name: 'Учебная программа',
    image: curriculum,
    link: ""
  },
  {
    id: 5,
    name: 'Документ',
    image: document,
    link: ""
  },
  {
    id: 6,
    name: 'Экзамены',
    image: exams,
    link: ""
  },
  {
    id: 7,
    name: 'Сообщения',
    image: messages,
    link: ""
  },
  {
    id: 8,
    name: 'Ведомость',
    image: performance,
    link: ""
  },
  {
    id: 9,
    name: 'Ресурсы',
    image: resources,
    link: ""
  },
  {
    id: 10,
    name: 'Премиум курсы',
    image: subjectChoose,
    link: ""
  },
  {
    id: 11,
    name: 'Расписание',
    image: timeTable,
    link: ""
  },
  {
    id: 12,
    name: 'E-Library',
    image: eBook,
    link: "/e-library"
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
              <Link to={item.link}></Link>
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