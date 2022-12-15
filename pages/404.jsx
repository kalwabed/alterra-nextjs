import React from 'react'

const Page404 = () => {
  return (
    <section>
      <h1>404</h1>
      <p>
        Maaf, halaman yang Anda cari tidak dapat ditemukan. Mohon periksa kembali URL yang Anda masukkan atau coba lagi
        nanti.
      </p>

      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
          }

          h1 {
            font-size: 10rem;
            margin: 0;
          }

          p {
            font-size: 1.5rem;
          }
        `}
      </style>
    </section>
  )
}

export default Page404
