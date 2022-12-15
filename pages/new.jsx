import Head from 'next/head'
import React from 'react'
import MeetupForm from '../src/components/meetup-form'

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
    <>
      <Head>
        <title>Meetup Baru | My Meetup</title>
        <meta name="description" content="Website My Meetup" />
      </Head>
      <MeetupForm onAddMeetup={onSubmit} />
    </>
  )
}

export default NewMeetupPage
