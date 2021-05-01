import React, { ReactElement } from 'react'

type Props = {
  text: string
  uri: string
}

const ButtonLink = ({ text, uri }: Props): ReactElement => (
  <div className="rounded shadow">
    <a
      href={uri}
      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded bg-headerColor hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
    >
      {text}
    </a>
  </div>
)

export default ButtonLink
