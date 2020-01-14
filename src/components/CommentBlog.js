import React from 'react'
import {connect} from 'react-redux'
import Blog from './Blog'
import {commentBlog} from '../actions/blogActions'

class CommentBlog extends React.Component {
    state = {
        author: this.props.blog ? this.props.blog.author: "",
        body: this.props.blog ? this.props.blog.body : "",
        title: this.props.blog ? this.props.blog.title : "",
        comments: this.props.blog ? this.props.blog.comments : [],
        date: this.props.blog ? this.props.blog.date : "",
        comment: ""
    }
    render(){
        return this.props.blog ? 
                <div className="m-5 rounded">
                    <Blog id={this.props.match.params.id} history={this.props.history} showDetails={true}/>

                    <form onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.commentBlog(this.props.match.params.id, e.target.elements.comment.value)
                    this.setState({comment: ""})
                    }}>   

                        <textarea name="comment" className="w-100" cols="30" rows="3" placeholder="Leave a comment..." value={this.state.comment} 
                        onChange={(e)=>{this.setState({comment: e.target.value})}}></textarea>
                        
                        <button className="float-right btn btn-secondary text-light">Submit</button>
                    </form>
                </div> 
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
    commentBlog : (id, comment) => dispatch(commentBlog(id, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlog)