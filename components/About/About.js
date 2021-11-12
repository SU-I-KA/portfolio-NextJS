import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from 'react-icons/fa'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about__me} id='about'>
      <div className='wrapper'>
        <div className='row'>
          <div className={styles.section__title}>
            <h1>About Me</h1>
            <p className={`${styles.small} ${styles.text__uppercase}`}>
              Information About Me
            </p>
          </div>
        </div>
        <div className='row'>
          <div className={styles.about__content}>
            <div className='row'>
              <div className={styles.img}>
                <img src='./images/about-me.jpeg' alt='about-me' />
              </div>
              <div className={styles.about__text}>
                <h4>I'M Basem Agwa</h4>
                <h6>
                  A <span>Full Stack Developer</span>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper vulputate posuere. Donec molestie, metus eu varius
                  rhoncus.
                </p>
                <div className={styles.info}>
                  <div className={styles.list}>
                    <label>Birthday:</label>
                    <p>21th august 1994</p>
                  </div>
                  <div className={styles.list}>
                    <label>E-mail:</label>
                    <p>info@domain.com</p>
                  </div>
                  <div className={styles.list}>
                    <label>Age:</label>
                    <p>26 Yr</p>
                  </div>
                  <div className={styles.list}>
                    <label>Phone:</label>
                    <p>820-000-0000</p>
                  </div>
                  <div className={styles.list}>
                    <label>Residence:</label>
                    <p>Egypt</p>
                  </div>
                  <div className={styles.list}>
                    <label>Skype:</label>
                    <p>skype.404</p>
                  </div>
                  <div className={styles.list}>
                    <label>Address:</label>
                    <p>203 NasrCity , Cairo</p>
                  </div>
                  <div className={styles.list}>
                    <label>Freelance:</label>
                    <p>Available</p>
                  </div>
                </div>
                <div className={styles.social__links}>
                  <a href=''>
                    <FaFacebookF className={styles.fa} />
                  </a>
                  <a href=''>
                    <FaTwitter className={styles.fa} />
                  </a>
                  <a href=''>
                    <FaInstagram className={styles.fa} />
                  </a>
                  <a href=''>
                    <FaLinkedinIn className={styles.fa} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
