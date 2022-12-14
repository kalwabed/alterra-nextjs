import { useRouter } from 'next/router'
import React from 'react'

import styles from './card.module.css'

const MeetupCard = props => {
  const { imageUrl, title, description, address, id } = props
  const router = useRouter()

  const toMeetupDetail = () => {
    router.push(`/${id}`)
  }

  return (
    <div className={styles.cardWrapper}>
      <img src={imageUrl} width={1000} height={300} alt="alt img" />
      <h4 className={styles.h4}>{title}</h4>
      <address className={styles.address}>{address}</address>

      <button className={styles.btn} onClick={toMeetupDetail}>
        Detail
      </button>
    </div>
  )
}

export default MeetupCard
