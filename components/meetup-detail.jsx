import { useRouter } from 'next/router'
import styles from './meetup-detail.module.css'

const MeetupDetail = props => {
  const { id, title, imageUrl, description, address } = props
  const router = useRouter()

  const handleOnDelete = async () => {
    await fetch(`/api/meetups?id=${id}`, {
      method: 'delete'
    })

    alert('Acara berhasil dihapus!')
    router.push('/')
  }

  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} height={500} width={1000} className={styles.banner} alt={title} />

      <section>
        <h1 className={styles.title}>{title}</h1>
        <address>{address}</address>
        <p>"{description}"</p>
      </section>

      <button className={styles.btnDelete} onClick={handleOnDelete}>
        Hapus
      </button>
    </div>
  )
}

export default MeetupDetail
