import Link from 'next/link'
import React from 'react'

import styles from '../styles/Home.module.css'

export const getServerSideProps = async props => {
  // ambil id dari query string
  // misalnya: /1, /2, /3, dst
  // sedikit berbeda dengan SSG
  const { id } = props.query

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { user: data }
  }
}

const UserDetailPage = props => {
  const { user } = props

  return (
    <div className={styles.container}>
      <Link href="/">Kembali</Link>
      <div className={styles.main}>
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Website:</strong> {user.website}
        </p>
      </div>
    </div>
  )
}

export default UserDetailPage
