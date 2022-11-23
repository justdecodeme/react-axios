import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";
// import { v4 as uuid } from 'uuid';

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_URL = "https://crudcrud.com/api/755661ddbba048079d0caff54268836e/posts";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPosts(response.data);
    })
  }, []);

  const deletePost = (postId) => {
    setDeleteId(postId)

    axios
      .delete(BASE_URL + "/" + postId)
      .then(() => {
        setDeleteId(null)
        axios.get(BASE_URL).then((response) => {
          setPosts(response.data);
        })
        alert("Post Deleted!")
      });
  }

  const renderPostsList = () => {
    if (posts.length === 0) {
      return <p>No post</p>
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, i) => <tr key={post._id}>
              <td>{i + 1}</td>
              <td>{post.title}</td>
              <td>
                <button onClick={() => navigate('/post/details/' + post._id)}>View</button>
                <button onClick={() => navigate('/post/edit/' + post._id)}>Edit</button>
                <button onClick={() => deletePost(post._id)}>{post._id === deleteId ? 'Deleting...' : 'Delete'}</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      )
    }
  }

  return <div className="Home">
    <h3>Home</h3>
    <br />

    <h4>Latest Posts</h4>
    <br />

    {posts ? renderPostsList() : <p>Loading...</p>}

    <br />
    <Link to="/post/add">Add Post</Link>
  </div>
}

export default Home;