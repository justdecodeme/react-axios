import { NavLink } from "react-router-dom"

function Header() {
  return <header>
    <h3>React - Axios</h3>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/posts">Posts</NavLink></li>
      <li><NavLink to="/post/add">Add Post</NavLink></li>
    </ul>
  </header>;
}

export default Header;