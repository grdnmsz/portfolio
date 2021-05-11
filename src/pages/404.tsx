import React, { ReactElement } from 'react'
import { Layout, SEO } from '../components'

const NotFoundPage = (): ReactElement => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
  </Layout>
)

export default NotFoundPage
