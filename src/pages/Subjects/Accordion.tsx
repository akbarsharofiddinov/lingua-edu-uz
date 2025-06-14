import React, { useState } from 'react'
import { Table } from 'antd'
import { subjects } from '@/assets/db'
import { FaAngleDown } from 'react-icons/fa6'

import styles from "./Subjects.module.scss"

const columns = [
  {
    title: "№",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Название предмета",
    dataIndex: "subject_name",
    key: "subject_name",
  },
  {
    title: "Учитель",
    dataIndex: "teacher",
    key: "teacher",
  },
  {
    title: "Кредит",
    dataIndex: "credit",
    key: "credit",
  },
  {
    title: "Часы",
    dataIndex: "hours",
    key: "hours",
  }
]

const Accordion: React.FC<{ semester: number }> = ({ semester }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className={accordion ? styles.activeSemester : styles.semester}>
      <div className={styles.top}>
        <p>{semester} - Семестр</p>
        <span onClick={() => setAccordion(prev => !prev)}><FaAngleDown /></span>
      </div>
      <Table className={styles['subjects-table']} dataSource={subjects} columns={columns} />
    </div>
  )
}

export default Accordion