import React from 'react'

import MeetupCard from '../components/card'
import styles from '../styles/home.module.css'

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/meetups')
  const data = await response.json()

  return {
    props: {
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
