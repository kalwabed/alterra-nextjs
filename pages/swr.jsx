import Link from 'next/link'
import React from 'react'
import useSwr from 'swr'

import styles from '../styles/Home.module.css'

const fetcher = async url => {
  const res = await fetch(url)
  return res.json()
}

const WithSwrPage = () => {
  const { data } = useSwr('https://jsonplaceholder.typicode.com/users', fetcher)

  return (
    <div className={styles.container}>
      <h1>With SWR</h1>
      <Link href="/">Dengan useEffect</Link>
      <div className={styles.grid}>
        {data &&
          data.map(user => (
            <div key={user.id} className={styles.card}>
              <p className={styles.title}>{user.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default WithSwrPage
