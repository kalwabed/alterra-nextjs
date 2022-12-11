import Link from 'next/link'
import React from 'react'

import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <img src="https://picsum.photos/50" width={50} height={50} alt="logo" className={styles.logo} />
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/" className={styles.a}>
                All Meetups
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/new" className={styles.a}>
                Add New Meetup
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
