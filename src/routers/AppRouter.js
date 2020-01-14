import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "../components/Header"
import Home from "../components/Home"
import Error from "../components/Error"
import SearchBlog from "../components/SearchBlog"
import { connect } from 'react-redux'
import { setBlogs } from '../actions/blogActions'
import EditBlog from '../components/EditBlog'
import AddBlog from '../components/AddBlog'
import CommentBlog from '../components/CommentBlog'

class AppRouter extends React.Component {
    componentDidMount(){
        try{
            const json = localStorage.getItem('blogs')
            const blogs = JSON.parse(json)
            if(blogs){
                this.props.dispatch(setBlogs(blogs))
            }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.blogs !== this.props.blogs){
            const json = JSON.stringify(this.props.blogs)
            localStorage.setItem('blogs', json)
        }
    }
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/show" component={SearchBlog} exact={true} />
                        <Route path="/edit/:id" component={EditBlog} exact={true} />
                        <Route path="/comment/:id" component={CommentBlog} exact={true} />
                        <Route path="/add" component={AddBlog} exact={true} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs : state.blogs
})

export default connect(mapStateToProps)(AppRouter)