import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className='wrapper'>
          <div className='row'>
            <div className={styles.logo}>Suika</div>
            <div className={styles.social}>
              <a href=''>
                <FaFacebookF />
              </a>
              <a href=''>
                <FaTwitter />
              </a>
              <a href=''>
                <FaInstagram />
              </a>
              <a href=''>
                <FaLinkedinIn />
              </a>
              <a href=''>
                <FaSkype />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <section className={styles.copyright}>
        <div className='wrapper'>
          <p>&copy; 2021 Copyright. All Rights Reserved</p>
        </div>
      </section>
    </>
  )
}

export default Footer
