import uuid from 'uuid'
import moment from 'moment'

export const addBlog = ({author, title, body, comments} = {}) => ({
    type:'ADD_BLOG',
    blog:{
        id: uuid(),
        author,
        title,
        body,
        date : moment().format(),
        comments
    }
})
export const removeBlog = ({id}) => ({
    type:'REMOVE_BLOG',
    id
})
export const editBlog = (id, updates) => ({
    type:'EDIT_BLOG',
    id,
    updates : {
        ...updates,
        date: moment().format()
    }
})
export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
})
export const commentBlog = (id, comment) => ({
    type: 'COMMENT_BLOG',
    id,
    comment
})