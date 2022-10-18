import React from 'react'
import { Link } from 'react-router-dom'
import { FaCat } from 'react-icons/fa' // for the logo for this webapp
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai' // for the menu and close button
import { useState } from 'react' // for the menu and close button

const navigation = [
  { name: 'Ana Sayfa', href: '/', current: true },
  { name: 'Hakkında', href: '/about', current: false },
  { name: 'İletşim', href: '/contact', current: false },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 
              text-center rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <AiOutlineClose className='h-6 w-auto' />
              ) : (
                <AiOutlineMenu className='h-6 w-auto' />
              )}
            </button>
          </div>
          <div className='flex-1 flex items-end justify-between sm:items-end sm:justify-between'>
            <div className='flex-shrink-1 flex items-center justify-between '>
              <FaCat className='h-8 w-auto mr-2  hover:fill-orange-500 hover:text-white rounded-md ' />
              <span className='font-semibold text-xl tracking-tight  hover:bg-gray-700 hover:text-white rounded-md '>
                Github Finder
              </span>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 tet-center justify-center'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white text-center'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium text-center'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
