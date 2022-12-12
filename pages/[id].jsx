import Link from 'next/link'
import React from 'react'

import styles from '../styles/Home.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async props => {
  const { id } = props.params

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
