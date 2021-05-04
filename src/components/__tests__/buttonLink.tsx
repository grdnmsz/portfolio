import React from 'react'
import renderer from 'react-test-renderer'

import { ButtonLink } from '../'

describe('Footer', () => {
  const props = {
    uri: '/path',
    text: 'clic',
  }

  it('should render correctly', () => {
    const tree = renderer.create(<ButtonLink {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
