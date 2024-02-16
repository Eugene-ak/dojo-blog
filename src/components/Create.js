import { useState } from "react";

// Component for creating blogs
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState(null);

  // Function to execute upon form submission
  const handleSubmit = async (e) => {
    // Avoid reloading page
    e.preventDefault();
    setIsLoading(true);

    setBlog({ title, body, author });
    try {
      const postData = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      });
      setIsLoading(false);
      const response = await postData.json();
      console.log(response);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <section className="create">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit} method="post">
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        {isLoading ? <button disabled>Loading...</button> : <button type="submit">Create</button>}
      </form>
      {/* { (blog && <div className="feedback">New Blog Created</div>) || (error && <div className="feedback">{ error }</div>) } */}
    </section>
  );
}

export default Create;