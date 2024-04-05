import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Createblog from "./pages/Createblog"
import './App.css'
import NoPage from "./pages/NoPage"
function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/blog/:id" element = {<Blog/>}/>
        <Route path="/createblog" element = {<Createblog/>}/>
        <Route path="*" element = {<NoPage/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
