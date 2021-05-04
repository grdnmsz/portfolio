import React from 'react'
import renderer from 'react-test-renderer'

import { IntroBio } from '../'

describe('IntroBio', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<IntroBio />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
