import React, { useState } from 'react'
import styles from './Auth.module.scss'
import authImage from "@/assets/images/auth.webp"
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const [role, setRole] = useState<"студент" | "учитель">('студент');

  const navigate = useNavigate()

  return (
    <>
      <div className={styles['auth-page']}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <img src={authImage} alt="" />
          </div>
          <form className={styles.right} onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="id">Ваш ID</label>
              <input type="text" name='id' id='id' placeholder={`${role} ID`} />
            </div>
            <div>
              <label htmlFor="password">Ваш пароль</label>
              <input type="password" name="password" id="password" placeholder='пароль' />
            </div>

            <div className={styles.buttons}>
              <button onClick={() => {
                if (role === 'студент') setRole("учитель");
                else setRole('студент')
              }}>Войти как {role === "студент" ? "учитель" : "студент"}</button>
              <button onClick={() => navigate('/')}>
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Auth