import { useState } from 'react'
import { Link } from 'gatsby'
import React, { ReactElement } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { NavLink } from '../'

const Header = (): ReactElement => {
  const [isOn, setIsOn] = useState(false)
  return (
    <nav className="bg-headerColor">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-20">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center ">
              <Link to={`/`}>
                <div className="text-xl sm:mr-12">
                  {'gordon'}
                  <span className="text-teal-700">{'$>'}</span>
                  {'dev'}
                </div>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-12">
                <NavLink destination={'/'} name={'Home'} />
                <NavLink destination={'/about'} name={'About'} />
                <NavLink destination={'/articles'} name={'Articles'} />
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Hamburger
              toggled={isOn}
              toggle={setIsOn}
              size={20}
              label="hamburger menu"
            />
          </div>
        </div>
      </div>
      <div // menu toggled by hamburger (mobile)
        className={`${isOn ? 'block' : 'hidden'} sm:hidden`}
        aria-checked={isOn}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink destination={'/'} name={'Home'} smallScreen={true} />
          <NavLink destination={'/about'} name={'About'} smallScreen={true} />
          <NavLink destination={'/articles'} name={'Articles'} smallScreen={true} />
        </div>
      </div>
    </nav>
  )
}

export default Header
