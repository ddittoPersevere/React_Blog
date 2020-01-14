import React from 'react'
import {connect} from 'react-redux'
import { setAuthorFilter, setTitleFilter, sortByAuthor, sortByDate } from '../actions/filterActions'

const SearchBlog = (props) => (
    <main role="main" className="inner cover text-light pb-2 d-flex flex-row">
        <div className="text-light d-flex flex-row">
            <form onSubmit={(e) => {e.preventDefault()}}>

                <input type="text" className="mx-1" name="author" placeholder="Author Filter" onChange={(e) => {
                    e.preventDefault()
                    const author = e.target.value.trim()
                    props.dispatch(setAuthorFilter(author))
                    }
                }/>

                <input type="text" className="mx-1" name="title" placeholder="Title Filter" onChange={(e) => {
                    e.preventDefault()
                    const title = e.target.value.trim()
                    props.dispatch(setTitleFilter(title))
                    }
                }/>
                <select name="sortBy" className="mx-1" onChange={(e)=>{
                    const sortBy = e.target.value
                    switch(sortBy){
                        case 'author':
                            props.dispatch(sortByAuthor())
                            break
                        case 'date':
                            props.dispatch(sortByDate())
                            break
                        default :
                            break     
                    }
                    }
                    }>
                    <option value="date">Sort By Date</option>
                    <option value="author">Sort By Author</option>
                </select>

            </form>
        </div>
    </main>
)

export default connect()(SearchBlog)