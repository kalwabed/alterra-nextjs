import styles from './meetup-detail.module.css'

const MeetupDetail = props => {
  const { title, imageUrl, description, address } = props

  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} height={500} width={1000} className={styles.banner} alt={title} />

      <section>
        <h1 className={styles.title}>{title}</h1>
        <address>{address}</address>
        <p>"{description}"</p>
      </section>

      <button>Hapus</button>
    </div>
  )
}

export default MeetupDetail
