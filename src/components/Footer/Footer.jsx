import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>
            Made with ❤️ by <a href='https://github.com/Rishabh3007'>Rishabh</a>
        </p>
        <p className={styles.line2}>
            Resume Forge © 2023
        </p>

    </div>
  )
}

export default Footer