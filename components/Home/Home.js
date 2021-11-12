import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from 'react-icons/fa'
import Typical from 'react-typical'

import styles from './Home.module.css'

const Home = () => {
  return (
    <section
      className={`${styles.hero} ${styles.d__flex} ${styles.flex__column} ${styles.justify__content__center}`}
    >
      <div className={styles.container}>
        <h1>Basem Agwa</h1>
        <p>
          I'm a{' '}
          <span>
            {' '}
            <Typical
              loop={Infinity}
              wrapper='r'
              steps={[
                'Web Developer',
                1000,
                'React Developer',
                1000,
                'Front End Developer',
                1000,
              ]}
            />
          </span>
        </p>
        <div className={styles.social__links}>
          <a href='#' className={styles.twitter}>
            <FaTwitter />
          </a>
          <a href='#' className={styles.facebook}>
            <FaFacebookF />
          </a>
          <a href='#' className={styles.instagram}>
            <FaInstagram />
          </a>
          <a href='#' className={styles.skype}>
            <FaSkype />
          </a>
          <a href='#' className={styles.linkedin}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
