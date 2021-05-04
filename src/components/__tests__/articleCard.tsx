import React from 'react'
import renderer from 'react-test-renderer'

import { ArticleCard } from '../'

describe('ArticleCard', () => {
  const props = {
    frontmatter: {
      title: 'a-title',
      date: '10-10-2020',
      description: 'some description to fill the gaps',
      category: 'web / foo'
    },
    fields: {
      slug: '#a-title'
    }
  }

  it('should render correctly', () => {
    const tree = renderer.create(<ArticleCard {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
