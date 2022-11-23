import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PostsList from "./pages/PostsList"
import PostDetails from "./pages/PostDetails"
import PostAdd from "./pages/PostAdd"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/post/add" element={<PostAdd />} />
            <Route path="/post/details" element={<PostDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
