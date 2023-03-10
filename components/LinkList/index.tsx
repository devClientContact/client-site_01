import React from 'react'
import styles from '../../styles/Main.module.scss'

const LinkList = () => {
  return (
    <>
      <div className={styles.linkListContainer}>
          <a className={styles.linkList} href='https://bandcamp.com'>
            bandcamp
          </a>
          <a className={styles.linkList} href='https://soundcloud.com'>
            soundcloud
          </a>
      </div>
    </>
  )
}

export default LinkList
