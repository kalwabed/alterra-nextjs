import * as React from 'react'
import { getDocs, collection } from 'firebase/firestore'

import MeetupCard from '../src/components/card'
import styles from '../src/styles/home.module.css'
import { database } from '../src/service/firebase'

const HomePage = () => {
  const [meetups, setMeetups] = React.useState([])

  React.useEffect(() => {
    const meetupsCollection = collection(database, 'meetups')
    getDocs(meetupsCollection).then(data => {
      setMeetups(() => data.docs.map(item => ({ ...item.data(), id: item.id })))
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      {meetups?.map(dummy => (
        <MeetupCard key={dummy.id} {...dummy} />
      ))}
    </div>
  )
}

export default HomePage
