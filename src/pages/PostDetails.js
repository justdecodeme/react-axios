import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_URL = "https://crudcrud.com/api/8550a9d7e91f4b27995fa6a17bc098e8/posts";

function PostDetails() {
  let { postId } = useParams();
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL + "/" + postId).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error.message + ": Post not found");
    });
  }, []);

  return <div className="PostDetails">
    <h3>Post Details</h3>
    <br />

    {error ? <p className="error">{error}</p> : ''}
    {post ? <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      </tbody>
    </table> : ''}
    {!post && !error ? <p>Loading...</p> : ''}

    <br />
    <Link to="/">Back to Home Page</Link>
  </div>
}

export default PostDetails;