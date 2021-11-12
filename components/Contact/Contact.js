import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact__us} id='contact'>
      <div className='wrapper'>
        <div className='row'>
          <div className={`${styles.section__title} text-center`}>
            <h1>Get In Touch</h1>
          </div>
        </div>
        <div className='row'>
          <div className={styles.contact__form}>
            <div className='row'>
              <div className={styles.contact__text}>
                <h2>Drop us a line</h2>
                <p>We are here to answer any question you may have</p>
              </div>
            </div>
            <div className='row space-between'>
              <div className={styles.col__6}>
                <input
                  type='text'
                  name=''
                  className={styles.form__control}
                  placeholder='Name'
                />
              </div>
              <div className={styles.col__6}>
                <input
                  type='text'
                  name=''
                  className={styles.form__control}
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='row'>
              <div className={styles.col__12}>
                <textarea
                  className={styles.form__control}
                  placeholder='Your Message'
                ></textarea>
              </div>
            </div>
            <div className='row'>
              <div className={`${styles.button} text-right`}>
                <a href='#'>Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
