import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPosts(response.data);
    })
  }, []);

  console.log(posts)

  return <div className="Home">
    <h3>Home</h3>
    <br />
    <h4>Latest Posts</h4>
    <br />
    {posts ? <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, i) => <tr key={post.id}>
          <td>{i}</td>
          <td>{post.title}</td>
          <td>
            <button onClick={() => navigate('/post/details/' + post.id)}>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>)}
      </tbody>
    </table> : <p>Loading...</p>}

  </div>
}

export default Home;