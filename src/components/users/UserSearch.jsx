import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'
import { FaSearch } from 'react-icons/fa'
import { GiCat } from 'react-icons/gi'

function UserSearch() {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Arama yapmak için bir şeyler yazınız ', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const users = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: users })

      setText('')
    }
  }

  return (
    <div className='flex  flex-col items-center justify-center '>
      <div>
        <GiCat className='h-[89px] w-[273px] hover:fill-amber-400' />
        <h1 className='text-center mt-2 text-2xl text-white '>
          GitHub - Finder{' '}
        </h1>
      </div>

      <div className='md:w-[584px] mx-auto mt-2 flex w-[92%] items-center rounded-full border hover:shadow-md  '>
        <div className='pl-5'>
          <FaSearch className=' text-gray-400' />
        </div>
        <input
          type='text'
          name='text'
          placeholder='Kullanıcı Adı Giriniz'
          className='w-full bg-transparent rounded-full py-[14px] pl-4 outline-none'
          value={text}
          onClick
          onChange={handleChange}
        />
      </div>

      <div className='flex mt-5'>
        <button
          className='bg-gray-800 text-white w-32 h-10  px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-700'
          onClick={handleSubmit}
        >
          Ara
        </button>
        {users.length > 0 && (
          <button
            className='bg-gray-800 text-white w-32 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ml-2'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            Resetle
          </button>
        )}
      </div>
    </div>
  )
}

export default UserSearch
