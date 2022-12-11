import React from 'react'

import MeetupCard from '../components/card'
import styles from '../styles/home.module.css'

const dummies = [
  {
    id: 'x1',
    title: 'Dummy 1',
    description: 'Dummy 1 description',
    address: 'Dummy 1 address',
    imageUrl: 'https://picsum.photos/seed/city/1000/300'
  },
  {
    id: 'x2',
    title: 'Dummy 2',
    description: 'Dummy 2 description',
    address: 'Dummy 2 address',
    imageUrl: 'https://picsum.photos/seed/city/1000/300'
  }
]

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      {dummies.map(dummy => (
        <MeetupCard key={dummy.id} {...dummy} />
      ))}
    </div>
  )
}

export default HomePage
