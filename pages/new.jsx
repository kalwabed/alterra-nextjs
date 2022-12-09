import React from 'react'
import MeetupForm from '../components/meetup-form'

const NewMeetupPage = () => {
  const onSubmit = meetupData => {
    console.log(meetupData)
  }

  return (
    <div>
      <MeetupForm onAddMeetup={onSubmit} />
    </div>
  )
}

export default NewMeetupPage
