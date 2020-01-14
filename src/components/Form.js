import React from 'react'
import {connect} from 'react-redux'

class Form extends React.Component {
    state = {
        aError: undefined,
        tError : undefined,
        bError: undefined,
        author: this.props.blog ? this.props.blog.author: "",
        body: this.props.blog ? this.props.blog.body : "",
        title: this.props.blog ? this.props.blog.title : "",
        comments: this.props.blog ? this.props.blog.comments : []
    }
    validate = (e) => {
        e.preventDefault()
        const author = e.target.elements.author.value.trim()
        const title = e.target.elements.title.value.trim()
        const body = e.target.elements.body.value.trim()
        if(!author){
            this.setState({nError: 'Please enter a valid name.'})
        }else if(!body){
            this.setState({bError: 'Blog must contain content.'})
        }else if(!title){
            this.setState({tError: 'Please give post a title.'})
        }else{
            this.props.onSubmit({
                author: this.state.author, 
                body: this.state.body, 
                title: this.state.title, 
                comments: this.state.comments
            })
            e.target.elements.author.value = ""
            e.target.elements.body.value = ""
            e.target.elements.title.value = ""
        }
    }
    render(){
        return(
            <form onSubmit={this.validate} className="rounded">

                <label htmlFor="author">Author</label>
                <input className="w-100" type="text" name="author" value={this.state.author} onChange={(e)=>{
                    this.setState({author: e.target.value})
                }}/>

                {this.state.aError && <p>{this.state.aError}</p>}

                <br/>

                <label htmlFor="title">Title</label>
                <input className="w-100" type="text" name="body" value={this.state.title} onChange={(e)=>{
                    this.setState({title: e.target.value})
                }}/>

                {this.state.tError && <p>{this.state.tError}</p>}

                <br/>

                <label htmlFor="body">Body</label>
                <textarea className="w-100" type="text" name="title" value={this.state.body} onChange={(e)=>{
                    this.setState({body: e.target.value})
                }} cols="30" rows="10"></textarea>

                {this.state.bError && <p>{this.state.bError}</p>}

                <br/>
                
                <button className="btn bg-secondary mt-3 float-right text-light">Submit</button>
            </form>
        )
    }
}


export default connect()(Form)