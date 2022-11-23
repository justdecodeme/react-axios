import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
// import { v4 as uuid } from 'uuid';

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const BASE_URL = "https://crudcrud.com/api/8550a9d7e91f4b27995fa6a17bc098e8/posts";


function PostAdd() {
  const [form, setForm] = useState({ title: '', body: '' })
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  const addPost = () => {
    setAdding(true)
    axios
      .post(BASE_URL, {
        // id: uuid(), // Not required for crudcrud.com apis
        title: form.title,
        body: form.body
      })
      .then(() => {
        setAdding(false)
        setForm({ title: '', body: '' })
        setTimeout(() => {
          alert("Post Added!")
        }, 100);
      }).catch(error => {
        setAdding(false)
        setError(error.message);
      });
  }

  return <div className="PostAddEdit">
    <h3>Add Post</h3>
    <br />

    {error ? <p className="error">{error}</p> : ''}

    <div className="form">
      <input type="text" placeholder="Title..." value={form.title} onChange={(e) => handleChange('title', e.target.value)} />
      <br />
      <br />
      <textarea type="text" placeholder="Body..." value={form.body} rows="10" onChange={(e) => handleChange('body', e.target.value)}></textarea>
      <br />
      <br />
      <button
        onClick={addPost}
        disabled={form.title === '' || form.body === ''}
      >
        {adding ? 'Adding...' : 'Add'}
      </button>

    </div>
  </div>
}

export default PostAdd;