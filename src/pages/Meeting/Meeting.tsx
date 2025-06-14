import React from 'react'
import styles from './Meeting.module.scss'
import Webcam from 'react-webcam'
import { IoPersonCircle } from 'react-icons/io5';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const Meeting: React.FC = () => {

  const webcamRef = React.useRef<any>(null);

  return (
    <>
      <div className={styles['meeting-page']}>
        <div className={styles.inner}>
          <div className={styles['video-conferense']}>
            <div className={styles['camera-box']}>
              <Webcam
                audio={false}
                height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={300}
                videoConstraints={videoConstraints}
              />
            </div>
          </div>
          <div className={styles.chat}>
            <div className={styles.messages}>
              <div className={styles.message}>
                <div className={styles.left}>
                  <p> <span><IoPersonCircle /></span> <span>Али</span></p>
                  <h4>Всем привет</h4>
                </div>
                <p>10:21</p>
              </div>
              <div className={styles.message}>
                <div className={styles.left}>
                  <p> <span><IoPersonCircle /></span> <span>Вы</span></p>
                  <h4>Привет</h4>
                </div>
                <p>10:21</p>
              </div>
            </div>
            <div className={styles['message-input']}>
              <input type="text" placeholder='сообщение' />
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meeting