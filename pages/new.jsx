import React from 'react'
import MeetupForm from '../components/meetup-form'

const NewMeetupPage = () => {
  const onSubmit = async meetupData => {
    const response = await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
  }

  return (
    <div>
      <MeetupForm onAddMeetup={onSubmit} />
    </div>
  )
}

export default NewMeetupPage
