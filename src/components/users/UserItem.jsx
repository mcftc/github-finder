import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div
      className='card card-compact w-auto  bg-base-100 shadow-xl rounded-lg  
          hover:bg-base-200 hover:shadow-2xl'
    >
      <div className='card-body justify-center items-center'>
        <div className='avatar indicator justify-center items-center '>
          <span className='btn-sm btn-primary indicator-item badge badge-primary hidden  group-hover:block '>
            {login}
          </span>

          <div className='w-24 mask mask-squircle justify-center items-center'>
            <img src={avatar_url} alt='Profile' />
          </div>
        </div>

        <h2 className='card-title'>
          <Link to={`/user/${login}`}>{login}</Link>
        </h2>

        <div className='card-actions justify-center items-center'>
          <Link to={`/user/${login}`} className='btn btn-ghost btn-xs'>
            Profili Görüntüle
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserItem
