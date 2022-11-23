import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

function PostDetails() {
  let { postId } = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(BASE_URL + postId).then((response) => {
      setPost(response.data);
    })
  }, []);

  return <div className="PostDetails">
    <h3>Post Details</h3>
    <br />

    {post ?
      <table>
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
      </table> : <p>Loading...</p>}

    <br />
    <Link to="/">Back to Home Page</Link>
  </div>
}

export default PostDetails;