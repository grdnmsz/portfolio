import React from 'react'
import renderer from 'react-test-renderer'

import { Layout } from '../'

describe('Layout', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
