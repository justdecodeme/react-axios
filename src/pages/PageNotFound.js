import { Link } from "react-router-dom"

function PageNotFound() {
  return <div className="PageNotFound">
    <h3>PageNotFound Page</h3>
    <br />
    <Link to="/">Back to Home</Link>
  </div>
}

export default PageNotFound;
