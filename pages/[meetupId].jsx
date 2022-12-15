import MeetupDetail from '../components/meetup-detail'

export const getServerSideProps = async req => {
  const meetupId = req.query.meetupId

  const res = await fetch(`http://localhost:3000/api/meetups?id=${meetupId}`)
  const meetup = await res.json()

  return {
    props: {
      meetup
    }
  }
}

const MeetupDetailPage = props => {
  return <MeetupDetail {...props.meetup} />
}

export default MeetupDetailPage
