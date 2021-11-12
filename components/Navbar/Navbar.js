import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

import styles from './Navbar.module.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const [scrollActive, setScrollActive] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
      linksContainerRef.current.style.backgroundColor = 'white'
    } else {
      linksContainerRef.current.style.height = '0px'
      linksContainerRef.current.style.backgroundColor = 'transparent'
    }
  }, [showLinks])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrollActive(true)
      } else {
        setScrollActive(false)
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])
  return (
    <header className={styles.header} id='home'>
      <nav className={`${styles.nav} ${scrollActive && 'active'}`}>
        <div className={styles.nav__center}>
          <div className={styles.nav__header}>
            <Link
              to='home'
              smooth={true}
              duration={1000}
              className={styles.logo}
            >
              Suika
            </Link>
            <button className={styles.nav__toggle} onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className={styles.links__container} ref={linksContainerRef}>
            <ul className={styles.links} ref={linksRef}>
              <li>
                <Link to='about' smooth={true} duration={1000}>
                  About
                </Link>
              </li>
              <li>
                <Link to='portfolio' smooth={true} duration={1000}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to='comments' smooth={true} duration={1000}>
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
