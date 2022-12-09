import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <img src="https://picsum.photos/50" width={50} alt="logo" className="logo" />
        <nav>
          <ul>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/new">Add New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
