import React from 'react'

const MeetupCard = props => {
  const { imageUrl, title, description, address, id } = props

  return (
    <div>
      <img src={imageUrl} width={100} height={200} alt="alt img" />
      <h4>{title}</h4>
      <address>{address}</address>
    </div>
  )
}

export default MeetupCard
