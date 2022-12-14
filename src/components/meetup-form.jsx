import * as React from 'react'

import styles from './meetup-form.module.css'

const MeetupForm = ({ onAddMeetup }) => {
  const titleRef = React.useRef(null)
  const imageUrlRef = React.useRef(null)
  const addressRef = React.useRef(null)
  const descriptionRef = React.useRef(null)

  const handleOnSubmit = event => {
    event.preventDefault()

    const meetupData = {
      title: titleRef.current.value,
      imageUrl: imageUrlRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value
    }

    onAddMeetup(meetupData)
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <div className={styles.formWrapper}>
        <div className={styles.formControl}>
          <label htmlFor="title" className={styles.label}>
            Judul
          </label>
          <input ref={titleRef} type="text" id="title" className={styles.input} />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="image" className={styles.label}>
            Image URL
          </label>
          <input ref={imageUrlRef} type="url" id="image" className={styles.input} />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="address" className={styles.label}>
            Alamat
          </label>
          <input ref={addressRef} type="text" id="address" className={styles.input} />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="description" className={styles.label}>
            Deskripsi
          </label>
          <textarea ref={descriptionRef} id="description" cols="30" rows="5" className={styles.textarea}></textarea>
        </div>
      </div>

      <button type="submit" className={styles.btn}>
        Tambahkan
      </button>
    </form>
  )
}

export default MeetupForm
