import React from 'react'
import styles from './Meeting.module.scss'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const Meeting: React.FC = () => {

  const webcamRef = React.useRef<any>(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

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
            <div className="messages">
              <div className="message">
                <div className="left">
                  <p>user</p>
                  <p>всем привет</p>
                </div>
                <p>10:21</p>
              </div>
            </div>
            <div className="message-input"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meeting