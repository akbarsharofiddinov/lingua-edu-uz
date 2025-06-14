import React from 'react'
import styles from "./Header.module.scss";
import logo from "@/assets/images/PNG 1.png";
import { BsPersonCircle } from 'react-icons/bs';
import { FaBars, FaVideo } from 'react-icons/fa6';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSidebar } from '@/store/storeSlice/storeSlice';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  const dispatch = useAppDispatch();
  const { sidebar } = useAppSelector(state => state.store)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <button className={styles.sidebarBtn} onClick={() => dispatch(setSidebar(!sidebar))}>
              <FaBars />
            </button>
            <Link to={'/meeting'} className={styles.videoConferense}>
              <FaVideo />
            </Link>
          </div>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="" />
            <div>
              <span>Lindua edu uz <br /> online ta'lim platformasi</span>
              <span>Maqsadlaringizga biz bilan erishing</span>
            </div>
          </Link>
          <div className={styles.profileBox}>
            <p><BsPersonCircle /></p>
            <p>Islam</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header