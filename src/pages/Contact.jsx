import React from 'react'

const Contact = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        Sorularınız ve önerileriniz için
        <a className='text-sky-400 ' href='https://github.com/nerdevx'>
          {' '}
          Github Profilim
        </a>{' '}
        üzerinden veya{' '}
        <a className='text-green-400 ' href='https://wa.me/905453177737'>
          {' '}
          WhatsApp
        </a>{' '}
        üzerinden iletişime geçebilirsiniz.
      </p>
    </>
  )
}

export default Contact
