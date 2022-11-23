import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";
// import { v4 as uuid } from 'uuid';

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_URL = "https://crudcrud.com/api/8550a9d7e91f4b27995fa6a17bc098e8/posts";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPosts(response.data);
    }).catch(error => {
      setError(error.message);
    });
  }, []);

  const deletePost = (postId) => {
    setDeleteId(postId)

    axios
      .delete(BASE_URL + "/" + postId)
      .then(() => {
        setDeleteId(null)
        setTimeout(() => {
          alert("Post Deleted!")
        }, 100);
        axios.get(BASE_URL).then((response) => {
          setPosts(response.data);
        }).catch(error => {
          setError(error.message);
        });
      }).catch(error => {
        setError(error.message);
        setDeleteId(null)
      });
  }

  useEffect(() => {
  }, [error]);


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

    {error ? <p className="error">{error}</p> : ''}
    {posts ? renderPostsList() : ''}
    {!posts && !error ? <p>Loading...</p> : ''}

    <br />
    <Link to="/post/add">Add Post</Link>
  </div>
}

export default Home;