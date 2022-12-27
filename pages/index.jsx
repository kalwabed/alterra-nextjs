import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  // kode ini akan dijalankan di server
  // dan berjalan setiap kali halaman diakses
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  // mengembalikan props untuk diolah oleh komponen
  return {
    props: { users }
  }
}

export default function Home(props) {
  const { users } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Users</h1>
      <div className={styles.grid}>
        {users.map(user => (
          <Link key={user.id} href={`/${user.id}`} className={styles.card}>
            <p className={styles.title}>{user.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
