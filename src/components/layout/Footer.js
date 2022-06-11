import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className='bold'> G3 Kimchi </span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer