const blogReducerDefaultState = []

export default (state = blogReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_BLOGS':
            return action.blogs
        case 'ADD_BLOG':
            return [...state, action.blog]
        case 'REMOVE_BLOG':
            return state.filter((item) => item.id !== action.id)
        case 'COMMENT_BLOG':
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        comments : [...item.comments, action.comment]
                    }
                }else{
                    return item
                }
            })
        case 'EDIT_BLOG':
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        ...action.updates
                    }
                }else{
                    return item
                }
            })
        default:
            return state
    }
}