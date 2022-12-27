import React from 'react'
import MeetupForm from '../components/meetup-form'

const NewMeetupPage = () => {
  const onSubmit = async meetupData => {
    // mengirim request ke API route yang dihandle di file api/meetups.js
    const response = await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(meetupData), // body harus dalam bentuk JSON
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <MeetupForm onAddMeetup={onSubmit} />
    </div>
  )
}

export default NewMeetupPage
