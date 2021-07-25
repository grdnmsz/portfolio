import React, { ReactElement } from 'react'
import { Layout, SEO } from '../components'

const NotFoundPage = (): ReactElement => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-col justify-center">
      <div className="sm:flex justify-center my-5 sm:my-12">
        <p className="font-extrabold text-4xl sm:text-5xl">404</p>
        <div className="sm:ml-6">
          <div className="border-accent sm:border-l sm:pl-6">
            <h2 className="font-extrabold text-2xl sm:text-4xl tracking-tight">
              Page not found
            </h2>
            <p className="mt-1 text-secondary text-sm sm:text-base">
              Please check the URL in the address bar and try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
