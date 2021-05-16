import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

type Props = {
  destination: string
  name: string
  smallScreen?: boolean
}

const config = {
  default: {
    className: 'py-2 text-sm font-medium',
    activeClassName: 'bg-border-900 border-b block text-sm font-medium',
  },
  smallScreeen: {
    className: 'px-3 py-2 block rounded text-sm font-medium',
    activeClassName:
      'bg-backgroundColor px-3 py-2 block rounded text-sm font-medium',
  },
}

const NavLink = ({ destination, name, smallScreen }: Props): ReactElement => {
  const { className, activeClassName } = smallScreen
    ? config.smallScreeen
    : config.default

  return (
    <Link
      to={destination}
      className={className}
      activeClassName={activeClassName}
    >
      {name}
    </Link>
  )
}

export default NavLink
