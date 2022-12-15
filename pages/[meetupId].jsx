import Head from 'next/head'
import MeetupDetail from '../components/meetup-detail'

export const getServerSideProps = async req => {
  const meetupId = req.query.meetupId

  try {
    const response = await fetch(`${process.env.URL}/api/meetups?id=${meetupId}`)
    const meetup = await response.json()
    return {
      props: {
        meetup
      }
    }
  } catch (error) {
    console.error(error)

    return {
      notFound: true
    }
  }
}

const MeetupDetailPage = props => {
  return (
    <>
      <Head>
        <title>{props.meetup.title} | My Meetup</title>
        <meta name="description" content="Website My Meetup" />
      </Head>
      <MeetupDetail {...props.meetup} />
    </>
  )
}

export default MeetupDetailPage
