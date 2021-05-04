import React from 'react'
import renderer from 'react-test-renderer'

import { ExperienceCard } from '../'

describe('ExperienceCard', () => {
  const props = {
    frontmatter: {
      title: 'a title',
      dates: '10-10-2020',
      location: 'some place',
      description: 'some description to fill the gaps'
    },
  }

  it('should render correctly', () => {
    const tree = renderer.create(<ExperienceCard {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
