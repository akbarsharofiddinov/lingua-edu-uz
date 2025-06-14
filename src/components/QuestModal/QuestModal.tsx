import React from 'react'
import styles from './QuestModal.module.scss'
import QuestItem from './QuestItem'

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const QuestModal: React.FC<IProps> = ({ setModal }) => {
  return (
    <div className={styles['quest-modal']} onClick={() => setModal(false)}>
      <div className={styles.inner} onClick={e => e.stopPropagation()}>
        <p>Предмет: Lorem, ipsum.</p>

        <div>
          <QuestItem numberQuest={1} />
          <QuestItem numberQuest={2} />
          <QuestItem numberQuest={3} />
          <QuestItem numberQuest={4} />
        </div>
      </div>
    </div>
  )
}

export default QuestModal