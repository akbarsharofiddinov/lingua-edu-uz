import React from 'react'
import styles from "./ELibrary.module.scss"

const ELibrary: React.FC = () => {
  return (
    <>
      <div className={styles.library}>
        <h1>Welcome to Library</h1>
        <a href="/The_Echoes_of_2042.docx" download>Download the story</a>
      </div>
    </>
  )
}

export default ELibrary