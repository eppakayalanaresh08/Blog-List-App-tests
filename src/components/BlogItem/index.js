import './index.css'

const BlogItem = props => {
  const {blogsEachList} = props
  const {title, description, publishedDate} = blogsEachList
  return (
    <li className="list-Item">
      <div className="container-eachTitle-publishedDate">
        <h1 className="heading-title">{title}</h1>
        <p className="description-publishedDate">{publishedDate}</p>
      </div>
      <p className="description-blog">{description}</p>
    </li>
  )
}

export default BlogItem
