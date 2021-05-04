import React from 'react'
import renderer from 'react-test-renderer'

import { CopyButton } from '../'

describe('CopyButton', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CopyButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
