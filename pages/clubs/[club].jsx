import { useRouter } from 'next/router'

const ClubDetailPage = () => {
  const router = useRouter()
  const club = router.query.club

  return <div>Detail {club}</div>
}

export default ClubDetailPage
