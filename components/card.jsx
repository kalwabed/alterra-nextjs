import { useRouter } from 'next/router'
import React from 'react'

const MeetupCard = props => {
  const { imageUrl, title, description, address, id } = props
  const router = useRouter()

  const toMeetupDetail = () => {
    router.push(`/${id}`)
  }

  return (
    <div>
      <img src={imageUrl} width={100} height={200} alt="alt img" />
      <h4>{title}</h4>
      <address>{address}</address>

      <button onClick={toMeetupDetail}>Detail</button>
    </div>
  )
}

export default MeetupCard
