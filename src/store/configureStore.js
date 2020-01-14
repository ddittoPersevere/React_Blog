import { combineReducers, createStore } from 'redux'
import blogReducer from '../reducers/blogReducer'
import filterReducer from '../reducers/filterReducer'
 
export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            filters: filterReducer
        })
    )
    return store
}

