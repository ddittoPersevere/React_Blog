import React from 'react'
import {connect} from 'react-redux'
import { removeBlog } from '../actions/blogActions'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Blog = (props) => (
        <div className="d-flex flex-column bg-dark p-2 w-100 justify-content-between text-light rounded">
            {props.showDetails ? 
                <div className="d-flex flex-row justify-content-between">
                    <h4 className="big">{props.blog.title}</h4>
                    <div>
                        <button className="btn bg-secondary px-1" onClick={(e) => {
                            props.dispatch(removeBlog({id: props.blog.id}))
                            props.history.push('/')
                        }}>Remove</button>
                        
                        <Link className="px-1" to={`/edit/${props.blog.id}`}>
                            <button className="btn bg-secondary">Edit</button>
                        </Link>
                    </div>
                </div>
                :
                <Link to={`/comment/${props.blog.id}`}><h4 className="lead w-auto">{props.blog.title}</h4></Link>
            }

            <div className="">
                <p className="mb-0"><span className="name">Created by: </span>{props.blog.author}</p>
                <p className="mb-0"><span className="name">On: </span>{moment(props.blog.date).format("MMM Do YYYY, h:mm a")}</p>
                {props.showDetails && <p className="m-3 font-italic">{props.blog.body}</p>}
            </div>

            {props.showDetails ? props.blog.comments && props.blog.comments.length > 0 && 
                <div>
                    <p className="lead mb-0">Comments</p>
                    <ul className="m-0">
                        {props.blog.comments.map((item) => <li key={item} className="py-1">{item}</li>)}
                    </ul>
                </div> 
                :
                <div className="d-inline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-inline" id="Capa_1" viewBox="0 0 60.015 60.015" x="0px" y="0px" xml="http://www.w3.org/XML/1998/namespace" space="preserve" version="1.1"><path d="M 42.008 0 h -24 c -9.925 0 -18 8.075 -18 18 v 14 c 0 9.59 7.538 17.452 17 17.973 v 8.344 c 0 0.937 0.764 1.699 1.702 1.699 c 0.449 0 0.873 -0.177 1.195 -0.499 l 1.876 -1.876 C 26.709 52.713 33.26 50 40.227 50 h 1.78 c 9.925 0 18 -8.075 18 -18 V 18 C 60.008 8.075 51.932 0 42.008 0 Z" /></svg>
                    <p className="font-style-italic d-inline pl-1">{props.blog.comments.length}</p>
                </div>
            
            }
        </div>
)

const mapStateToProps = (state, props) => ({
    blog : state.blogs.find((item)=> item.id === props.id)
})

export default connect(mapStateToProps)(Blog)