import React from 'react'
import { addDoc, collection } from 'firebase/firestore'

import MeetupForm from '../src/components/meetup-form'
import { database } from '../src/service/firebase'

const NewMeetupPage = () => {
  const onSubmit = async meetupData => {
    try {
      const meetupsCollection = collection(database, 'meetups')
      await addDoc(meetupsCollection, meetupData)
      alert('Data berhasil ditambahakan')
    } catch (error) {
      alert('Sepertinya terjadi kesalahan')
      console.error(error)
    }
  }

  return (
    <div>
      <MeetupForm onAddMeetup={onSubmit} />
    </div>
  )
}

export default NewMeetupPage
