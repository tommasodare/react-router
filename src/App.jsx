import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import Post from "./pages/Post.jsx"
import ChiSiamo from "./pages/ChiSiamo.jsx"

//Layout
import DefaultLayout from "./layout/DefaultLayout.jsx"


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />} >
          <Route path="" element={<HomePage />} />
          <Route path="/post" element={<Post />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Route>

      </Routes>

    </BrowserRouter>



  )

}