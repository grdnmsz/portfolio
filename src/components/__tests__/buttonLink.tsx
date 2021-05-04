import React from 'react'
import renderer from 'react-test-renderer'

import { ButtonLink } from '../'

describe('ButtonLink', () => {
  const props = {
    uri: '/path',
    text: 'clic',
  }

  it('should render correctly', () => {
    const tree = renderer.create(<ButtonLink {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
