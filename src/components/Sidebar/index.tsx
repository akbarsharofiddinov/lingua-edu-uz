import React from 'react'
import styles from "./Sidebar.module.scss"
import { FaBook, FaPaperclip, FaTableList } from 'react-icons/fa6'
import { useAppSelector } from '@/store/hooks'
import { Link } from 'react-router-dom'
import { RiFileList2Line } from 'react-icons/ri'
import { GrScorecard } from 'react-icons/gr'
import { MdLocalLibrary } from 'react-icons/md'

const Sidebar: React.FC = () => {

  const { sidebar } = useAppSelector(state => state.store)

  return (
    <>
      <div className={styles.sidebar} data-state={sidebar ? "active" : ""}>
        <h3 className={styles.title}>
          Добро пожаловать
        </h3>
        <ul className={styles.sidebarMenu}>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><FaBook /></span>Мои предметы
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><FaTableList /></span>Расписания
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><FaPaperclip /></span>Задания
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><RiFileList2Line /></span>Отработка
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><RiFileList2Line /></span>Экзамены
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><GrScorecard /></span>Баллы
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <Link to="/e-library">
              <span><MdLocalLibrary /></span>Электронная библиотека
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar