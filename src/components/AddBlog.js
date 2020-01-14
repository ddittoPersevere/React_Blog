import React from 'react'
import {connect} from 'react-redux'
import Form from './Form'
import {addBlog} from '../actions/blogActions'

class AddBlog extends React.Component {
    onSubmit = (blog) => {
        this.props.addBlog(blog)
        this.props.history.push('/')
    }
    render(){
        return (
            <main role="main" className="inner cover text-light p-5">
                <div className="d-flex flex-column bg-dark p-2 justify-content-between">
                    <h3>Create Blog</h3>
                    <Form onSubmit={this.onSubmit}/>
                </div>
            </main>
        )
    }
}


const mapStateToProps = (state, props) => ({
    blog : state.blogs.find((item)=> item.id === props.match.params.id)
})
const mapDispatchToProps = (dispatch) => ({
    addBlog : (id, blog) => dispatch(addBlog(id, blog))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog)