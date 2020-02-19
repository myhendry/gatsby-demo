import React from 'react'

import socialIcons from '../constants/social-icons'
import styles from '../css/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {socialIcons.map((x, index) => {
          return (
            <a
              key={index}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {x.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; hendry {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
