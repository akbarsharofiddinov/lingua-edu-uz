import React from 'react'
import styles from "./Scores.module.scss"
import { Table } from 'antd'

const columns = [
  {
    title: '',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Предметы',
    dataIndex: 'subject',
    key: 'subject'
  },
  {
    title: 'ТК',
    dataIndex: 'tk',
    key: 'tk'
  },
  {
    title: 'ПК',
    dataIndex: 'pk',
    key: 'pk'
  },
  {
    title: 'ИК',
    dataIndex: 'ik',
    key: 'ik'
  },
  {
    title: 'Общий',
    dataIndex: 'general',
    key: 'general'
  }
]

const data = [
  {
    index: 1,
    subject: 'Lorem, ipsum.',
    tk: 21,
    pk: 13,
    ik: 47,
    general: 81
  },
  {
    index: 2,
    subject: 'Lorem, ipsum.',
    tk: 21,
    pk: 13,
    ik: 47,
    general: 81
  },
  {
    index: 3,
    subject: 'Lorem, ipsum.',
    tk: 21,
    pk: 13,
    ik: 47,
    general: 81
  },
  {
    index: 4,
    subject: 'Lorem, ipsum.',
    tk: 21,
    pk: 13,
    ik: 47,
    general: 81
  }
]

const Scores: React.FC = () => {
  return (
    <>
      <div className={styles.scores}>
        <div className={styles.inner}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}

export default Scores