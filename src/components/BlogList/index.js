import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsListHome} = props
  return (
    <ul className="lists-blog-container">
      {blogsListHome.map(eachList => (
        <BlogItem blogsEachList={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}

export default BlogList
