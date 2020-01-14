export default (blogs, {author, title, sortBy}) => {
    return blogs.filter((item) => {
        const authorMatch = item.author.toLowerCase().includes(author.toLowerCase())
        const titleMatch = item.title.toLowerCase().includes(title.toLowerCase())
        return authorMatch && titleMatch
    }).sort((a,b) => {
        if(sortBy === 'author'){
            return a.author.toLowerCase() < b.author.toLowerCase() ? -1 : a.author.toLowerCase() > b.author.toLowerCase() ? 1 : 0
        }else if(sortBy === 'date'){
            return a.date < b.date ? 1 : b.date > a.date ? -1 : 0
        }
    })
}