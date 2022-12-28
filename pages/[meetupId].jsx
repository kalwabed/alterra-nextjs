import Head from 'next/head'
import MeetupDetail from '../src/components/meetup-detail'
import { db } from '../src/utils/lowdb'

export const getServerSideProps = async req => {
  const meetupId = req.query.meetupId

  // untuk mengakses data dari file db.json harus
  // diawali dengan memanggil await db.read()
  await db.read()

  // db.data.meetups adalah array dari data meetups
  // yang sudah diambil dari file db.json
  const meetup = db.data.meetups.find(meet => {
    // mencari data meetup berdasarkan id
    return meet.id === meetupId
  })

  if (!meetup) {
    return {
      // jika data meetup tidak ditemukan, maka
      // akan mengembalikan props notFound dengan nilai true
      // dan halaman akan menampilkan 404 Not Found.
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
        {/* mengubah judul dan deskripsi halaman
        berdasarkan judul meetup */}
        <title>{props.meetup.title} | My Meetup</title>
        <meta name="description" content={props.meetup.title} />
        <meta property="og:title" content={props.meetup.title} />
      </Head>
      <MeetupDetail {...props.meetup} />
    </>
  )
}

export default MeetupDetailPage
