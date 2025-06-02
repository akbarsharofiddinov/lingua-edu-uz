import React, { useState } from 'react'
import styles from "./ELibrary.module.scss"
import banner from "@/assets/e-library/21999903.jpg"
import book from "@/assets/e-library/book.jpg"
import { GoDownload } from 'react-icons/go'

const books = [
  {
    id: 1,
    name: 'The Echoes of 2042',
    path: '/The_Echoes_of_2042.docx',
    image: book
  },
  {
    id: 2,
    name: 'The Echoes of 2042',
    path: '/The_Echoes_of_2042.docx',
    image: book
  },
  {
    id: 3,
    name: 'The Echoes of 2042',
    path: '/The_Echoes_of_2042.docx',
    image: book
  }
]

const ELibrary: React.FC = () => {

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className={styles.library}>
        <img src={banner} alt="" className={styles.banner} />
        <div className={styles['search-box']}>
          <p>Поиск</p>
          <input type="search" placeholder='название книги' name="search-book" value={searchInput} onChange={e => setSearchInput(e.target.value)} id="search-boo" />
          <button>Поиск</button>
        </div>
        <h1 className={styles.secion_title}>
          Лучшие книги
        </h1>
        <div className={styles.inner}>
          {
            books.map(item => (
              <div className={styles.book_card} key={item.id}>
                <img src={item.image} alt="" />
                <p className={styles.name}>{item.name}</p>
                <a href={item.path} download><GoDownload /></a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ELibrary