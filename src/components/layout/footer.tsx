import React, { ReactElement } from 'react'
import { github, linkedin, gatsby, tailwind } from '../../assets/svg'

const footer = (): ReactElement => {
  return (
    <footer className="bg-backgroundColor lg:px-8 px-6 py-12 text-gray-300">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-2">
          {github({ url: 'https://github.com/grdnmsz' })} 
          {linkedin({
            url: 'https://www.linkedin.com/in/gordon-meszaros-530649114/',
          })}
        </div>
        <div className="flex items-center mt-4 space-x-1 text-sm">
          <div>{new Date().getFullYear()} • &copy;Gordon Meszaros </div>
          <div>• Made with </div>
          {gatsby}
          <div>{' & '}</div>
          {tailwind}
        </div>
      </div>
    </footer>
  )
}

export default footer
