import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("https://dojo-blog-server.onrender.com/blogs");

  return (
    <main className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={ blogs } title="All Blogs" /> }
    </main>
  );
}
 
export default Home;