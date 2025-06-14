import React, { useState } from 'react'
import styles from "./QuestModal.module.scss"
import { FaAngleDown } from 'react-icons/fa6';

const QuestItem: React.FC<{ numberQuest: number }> = ({ numberQuest }) => {

  const [accordion, setAccordion] = useState(false)
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={accordion ? styles['active-quest'] : styles['quest-item']} onClick={() => setAccordion(prev => !prev)}>
        <div className={styles.top}>
          <div>
            <span>{numberQuest} - Задания:</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <span className={styles.icon}><FaAngleDown /></span>
        </div>

        <div className={styles.body}>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto atque ducimus asperiores recusandae, ipsa accusamus repudiandae numquam? Unde cumque, earum facere officiis quo fugit porro similique inventore ut? Nisi, eum porro alias ea amet id, numquam perferendis necessitatibus consectetur nulla incidunt eius quos dignissimos facere voluptate vel aliquid voluptatem harum nam ut repellendus, consequatur iste? Nostrum atque, unde sapiente commodi dicta facilis perspiciatis dolore, blanditiis consectetur ab expedita distinctio, exercitationem ex eos laudantium similique quod quo cupiditate qui nesciunt ratione reiciendis illum? Qui rem explicabo quibusdam facere quis aspernatur tenetur sit fuga odit eum accusantium non sequi neque, eaque consequatur consequuntur quia! In temporibus quas labore voluptatum nostrum maxime dignissimos placeat adipisci excepturi qui ducimus tenetur distinctio eaque asperiores nemo saepe eos voluptate, eveniet blanditiis repellendus doloribus provident iusto voluptatem quo. Ut qui odio quam tenetur atque magnam omnis! Impedit iste eos unde facere ratione rem nihil saepe reiciendis a ducimus corporis eligendi tenetur deserunt at nostrum, vero, odio porro harum vel sed sit voluptates inventore laborum quis? Nihil facere ut, repudiandae quaerat deleniti deserunt nobis, dolorum numquam quod quo delectus vel enim harum recusandae velit eum vitae tenetur sit eaque impedit minus cumque labore voluptate ullam! Aliquid a quod odio ipsum illo ratione quo, incidunt cum provident consequatur deleniti obcaecati modi officia aut, quasi cupiditate ex. Eaque neque, nostrum iure asperiores minima cupiditate corporis ad dolores earum laudantium quae, reprehenderit velit corrupti cum! Numquam amet a maiores ducimus culpa, possimus reiciendis ullam earum nihil eos quam veniam totam obcaecati quae deleniti et eligendi architecto consequatur inventore exercitationem quo ad? Praesentium facere tempora, saepe ipsa illum optio velit illo reiciendis numquam corrupti adipisci eaque ut quaerat nihil quos quia deserunt molestiae rem voluptates laudantium et dolorem ipsum perferendis fugit. Cupiditate quidem repellendus molestiae asperiores minima magni tempore dolor ratione distinctio?</p>

          <div className={styles['input-box']}>
            {!file && <label htmlFor="file">Выбрать файл</label>}
            <input type="file" style={{ display: 'none' }} name="file" id="file" onChange={handleChange} />

            {file && (
              <div className={styles.file}>
                <p>{file.name} {file && <span className={styles.removeFile} onClick={() => setFile(null)}>удалить файл</span>} </p>
                {/* Image preview if it's an image */}
                {file.type.startsWith('image') && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    width={150}
                    style={{ marginTop: 10 }}
                  />
                )}
              </div>
            )}

            {!file && <p>
              Загрузите файл сюда
            </p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestItem