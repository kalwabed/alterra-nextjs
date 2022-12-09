import * as React from 'react'

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
    <form onSubmit={handleOnSubmit}>
      <div>
        <div>
          <label htmlFor="title">Judul</label>
          <input ref={titleRef} type="text" id="title" />
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input ref={imageUrlRef} type="url" id="image " />
        </div>

        <div>
          <label htmlFor="address">Alamat</label>
          <input ref={addressRef} type="text" id="address" />
        </div>

        <div>
          <label htmlFor="description">Deskripsi</label>
          <textarea ref={descriptionRef} id="description" cols="30" rows="10"></textarea>
        </div>
      </div>

      <button type="submit">Tambahkan</button>
    </form>
  )
}

export default MeetupForm
