import React from 'react'
import { FaPlus } from 'react-icons/fa'

import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <section className={styles.portfolio} id='portfolio'>
      <div className='wrapper'>
        <div className='row'>
          <div className={`${styles.section__title} text-center`}>
            <h1>Latest Works</h1>
          </div>
        </div>

        <div className='row'>
          <div className={styles.portfolio__gallery}>
            <div className={styles.item}>
              <div className={styles.inner}>
                <img src='./images/portfolio/1.jpg' alt='portfolio-img' />
                <div className={styles.overlay}>
                  <div className={styles.fa}>
                    <FaPlus className={styles.fa__plus} />
                  </div>
                  <h4>Website1</h4>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inner}>
                <img src='./images/portfolio/2.jpg' alt='portfolio-img' />
                <div className={styles.overlay}>
                  <div className={styles.fa}>
                    <FaPlus className={styles.fa__plus} />
                  </div>
                  <h4>Website2</h4>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inner}>
                <img src='./images/portfolio/3.jpg' alt='portfolio-img' />
                <div className={styles.overlay}>
                  <div className={styles.fa}>
                    <FaPlus className={styles.fa__plus} />
                  </div>
                  <h4>Website3</h4>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inner}>
                <img src='./images/portfolio/4.jpg' alt='portfolio-img' />
                <div className={styles.overlay}>
                  <div className={styles.fa}>
                    <FaPlus className={styles.fa__plus} />
                  </div>
                  <h4>Website4</h4>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inner}>
                <img src='./images/portfolio/5.jpg' alt='portfolio-img' />
                <div className={styles.overlay}>
                  <div className={styles.fa}>
                    <FaPlus className={styles.fa__plus} />
                  </div>
                  <h4>Website5</h4>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.inner}>
                <img src='./images/portfolio/6.jpg' alt='portfolio-img' />
                <div className={styles.overlay}>
                  <div className={styles.fa}>
                    <FaPlus className={styles.fa__plus} />
                  </div>
                  <h4>Website6</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
