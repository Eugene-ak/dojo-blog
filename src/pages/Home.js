import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {

  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <main className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={ blogs } title="All Blogs" /> }
    </main>
  );
}
 
export default Home;