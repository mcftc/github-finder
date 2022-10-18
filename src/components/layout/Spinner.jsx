import { FaPaw } from 'react-icons/fa'

function Spinner() {
  return (
    <div className='flex justify-center items-center'>
      <FaPaw className='animate-spin text-4xl text-primary' />
    </div>
  )
}

export default Spinner
