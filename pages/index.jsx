import React from 'react'

import MeetupCard from '../components/card'
import styles from '../styles/home.module.css'

export const getServerSideProps = async () => {
  // melakukan request ke API route jika dari SSR harus menyertakan alamat lengkap.
  // ketika di production, kita bisa mengganti localhost:3000 dengan domain
  const response = await fetch('http://localhost:3000/api/meetups')
  const data = await response.json()

  return {
    props: {
      // jika data.meetups tidak ada, maka akan diisi dengan array kosong
      meetups: data.meetups ?? []
    }
  }
}

const HomePage = ({ meetups }) => {
  return (
    <div className={styles.wrapper}>
      {meetups.map(meetup => (
        <MeetupCard key={meetup.id} {...meetup} />
      ))}
    </div>
  )
}

export default HomePage
