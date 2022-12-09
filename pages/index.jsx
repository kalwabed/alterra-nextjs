import React from 'react'
import MeetupCard from '../components/card'

const dummies = [
  {
    id: 'x1',
    title: 'Dummy 1',
    description: 'Dummy 1 description',
    address: 'Dummy 1 address',
    imageUrl: 'https://picsum.photos/seed/city/100/200'
  },
  {
    id: 'x2',
    title: 'Dummy 2',
    description: 'Dummy 2 description',
    address: 'Dummy 2 address',
    imageUrl: 'https://picsum.photos/seed/city/100/200'
  }
]

const HomePage = () => {
  return (
    <div>
      {dummies.map(dummy => (
        <MeetupCard key={dummy.id} {...dummy} />
      ))}
    </div>
  )
}

export default HomePage
