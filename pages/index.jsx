import Head from 'next/head'
import React from 'react'

import MeetupCard from '../src/components/card'
import styles from '../src/styles/home.module.css'
import { db } from '../src/utils/lowdb'

export const getServerSideProps = async () => {
  await db.read()
  const meetups = db.data.meetups ?? []

  return {
    props: {
      meetups: meetups
    }
  }
}

const HomePage = ({ meetups }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home | My Meetup</title>
        <meta name="description" content="Website My Meetup" />
      </Head>

      {meetups.map(meetup => (
        <MeetupCard key={meetup.id} {...meetup} />
      ))}
    </div>
  )
}

export default HomePage
