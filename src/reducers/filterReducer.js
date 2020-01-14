const filterReducerDefaultState = {
    author: "",
    title: "",
    sortBy: "date"
}
export default (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_AUTHOR_FILTER':
            return {
                ...state,
                author:action.author
            }
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                title:action.title
            }
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORTBY_AUTHOR':
            return {
                ...state,
                sortBy:'author'
            }        
        default:
            return state
    }
}