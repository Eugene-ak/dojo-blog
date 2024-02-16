import { Link } from "react-router-dom";

// Not found page component
const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Sorry :(</h1>
      <p>The page you requested cannot be found</p>
      <Link to="/">Go to Home page</Link>
    </section>
  );
}
 
export default NotFound;