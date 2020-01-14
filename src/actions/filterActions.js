export const setAuthorFilter = (author = '') => ({
    type:'SET_AUTHOR_FILTER',
    author
})
export const setTitleFilter = (title = '') => ({
    type:'SET_TITLE_FILTER',
    title
})

export const sortByAuthor = () => ({
    type:'SORTBY_AUTHOR'
})

export const sortByDate = () => ({
    type:'SORTBY_DATE'
})