import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// Blog detail page component
const BlogDetail = () => {
  const author = "JSON Placeholder API";
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const navigate = useNavigate();

  // Function to delete blogs and redirect to home route
  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(() => navigate("/"));
      alert("Blog deleted!");
  }

  return (
    <main className="blog-detail">
      {/* Display loading message while fetching data */}
      { isPending && <p>Loading...</p> }
      {/* Display error message if unsuccessful */}
      { error && <p>{ error }</p> }
      {/* Display blog if successful */}
      { blog && <article>
        <h2>{ blog.title }</h2>
        <p>Written by { author }</p>
        <p> { blog.body }</p>
        <button className="delete-btn" onClick={handleDelete}>Delete this blog</button>
      </article> }
    </main>
  );
}
 
export default BlogDetail;