import React from 'react'
import styles from "./Sidebar.module.scss"
import { FaBook, FaPaperclip, FaTableList } from 'react-icons/fa6'
import { useAppSelector } from '@/store/hooks'
import { Link } from 'react-router-dom'
import { RiFileList2Line } from 'react-icons/ri'
import { GrScorecard } from 'react-icons/gr'
import { MdLocalLibrary } from 'react-icons/md'
import logo from "@/assets/images/PNG 1.png"

const Sidebar: React.FC = () => {

  const { sidebar } = useAppSelector(state => state.store)

  return (
    <>
      <div className={styles.sidebar} data-state={sidebar ? "active" : ""}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><FaBook /></span><span>Мои предметы</span>
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><FaTableList /></span><span>Расписания</span>
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><FaPaperclip /></span><span>Задания</span>
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><RiFileList2Line /></span><span>Отработка</span>
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><RiFileList2Line /></span><span>Экзамены</span>
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <a href="#">
              <span><GrScorecard /></span><span>Баллы</span>
            </a>
          </li>
          <li className={styles.sidebarMenu_item}>
            <Link to="/e-library">
              <span><MdLocalLibrary /></span><span>Электронная библиотека</span>
            </Link>
          </li>
        </ul>
      </div >
    </>
  )
}

export default Sidebar