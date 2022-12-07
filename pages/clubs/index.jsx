import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const ClubsPage = () => {
  const router = useRouter()

  const toChelsea = () => {
    router.push('/clubs/chelsea')
    // atau
    // router.replace('/clubs/chelsea')
  }

  return (
    <div>
      <h1>Clubs</h1>
      <Link href="/clubs/liverpool">Liverpool</Link>
      <button onClick={toChelsea}>Chelsea</button>
    </div>
  )
}

export default ClubsPage
