import React from 'react'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section className={styles.skills}>
      <div className='wrapper'>
        <div className='row align-items-center'>
          <div className={styles.skills__content}>
            <div className='row'>
              <div className={styles.section__title}>
                <h1>Professional Skills</h1>
                <p>
                  Mauris nec iaculis diam, in mattis ex. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className={styles.skill__box}>
                <h6>HTML5</h6>
                <div className={styles.skill__bar}>
                  <div
                    className={styles.skill__bar__in}
                    style={{ width: '92%' }}
                  >
                    <span>92%</span>
                  </div>
                </div>
              </div>
              <div className={styles.skill__box}>
                <h6>CSS3</h6>
                <div className={styles.skill__bar}>
                  <div
                    className={styles.skill__bar__in}
                    style={{ width: '86%' }}
                  >
                    <span>86%</span>
                  </div>
                </div>
              </div>
              <div className={styles.skill__box}>
                <h6>JAVASCRIPT</h6>
                <div className={styles.skill__bar}>
                  <div
                    className={styles.skill__bar__in}
                    style={{ width: '65%' }}
                  >
                    <span>65%</span>
                  </div>
                </div>
              </div>
              <div className={styles.skill__box}>
                <h6>PYTHON</h6>
                <div className={styles.skill__bar}>
                  <div
                    className={styles.skill__bar__in}
                    style={{ width: '70%' }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <img src='./images/skill.jpg' alt='skill-image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
