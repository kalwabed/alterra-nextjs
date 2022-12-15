import Head from 'next/head'
import MeetupDetail from '../src/components/meetup-detail'
import { db } from '../src/utils/lowdb'

export const getServerSideProps = async req => {
  const meetupId = req.query.meetupId

  await db.read()
  const meetup = db.data.meetups.find(meet => {
    return meet.id === meetupId
  })

  if (!meetup) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      meetup
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
