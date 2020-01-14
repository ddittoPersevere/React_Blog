import React from 'react'
import {connect} from 'react-redux'
import Form from './Form'
import {editBlog} from '../actions/blogActions'

class EditBlog extends React.Component {
    onSubmit = (blog) => {
        this.props.editBlog(this.props.blog.id, blog)
        this.props.history.push('/')
    }
    render(){
        return this.props.blog ? 
                <main role="main" className="inner cover text-light p-5 m-5 rounded">
                    <div className="d-flex flex-column bg-dark p-2 justify-content-between">
                        <h3>Edit Blog</h3>
                        <Form blog={this.props.blog} onSubmit={this.onSubmit}/>
                    </div>
                </main>
                :
                <div className="m-5">
                    <h1>Post Not Found</h1>
                </div> 
    }
}

const mapStateToProps = (state, props) => ({
    blog : state.blogs.find((item)=> item.id === props.match.params.id)
})
const mapDispatchToProps = (dispatch) => ({
    editBlog : (id, blog) => dispatch(editBlog(id, blog))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog)