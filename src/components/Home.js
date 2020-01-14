import React from 'react'
import BlogList from './BlogList'
import SearchBlog from './SearchBlog'

const Home = (props) => (
    <main role="main" className="inner cover text-light m-5">
        <SearchBlog />
        <BlogList />
  </main>
)


export default Home