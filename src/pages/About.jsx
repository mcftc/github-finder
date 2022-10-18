function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        Bu uygulama React.js ile yazılmıştır. Github API kullanılarak kullanıcı
        ve kullanıcıların repoları görüntülenmektedir.
        <a href='https://github.com/nerdevx'> Github Profilim</a> üzerinden
        iletişime geçebilirsiniz.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Arama Motoru kısmı için Google Search Tasarımından esinlenilmiştir.
        Uygulamanın tasarımı için Tailwind CSS kullanılmıştır.
      </p>
    </>
  )
}

export default About
