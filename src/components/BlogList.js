import { Link } from "react-router-dom";

// Component to display list of blogs on home page
const BlogList = ({ blogs, title }) => {
  return (
    <section className="blog-list">
      <h2>{ title }</h2>
      {
        blogs.map((blog) => (
          <div className="blog-preview" key={ blog._id }>
            <Link to={`blog/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
          </div>
        ))
      }
    </section>
  );
}

export default BlogList;