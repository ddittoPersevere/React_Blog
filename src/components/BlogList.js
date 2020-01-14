import React from 'react'
import {connect} from 'react-redux'
import Blog from './Blog'
import filterBlogs from '../selectors/selectors'

const BlogList = (props) => (
    <div className="">
    {
        props.blogs.map((item) => ( <div key={item.id}><Blog id={item.id} showDetails={false}/><br /></div> ))
    }  
    </div>
)

const mapStatetoProps = (state) => ({
    blogs: filterBlogs(state.blogs, state.filters)
})

export default connect(mapStatetoProps)(BlogList)