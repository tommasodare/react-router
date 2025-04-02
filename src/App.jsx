import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import Post from "./pages/Post.jsx"
import Prodotto from "./pages/Prodotto.jsx"
import ChiSiamo from "./pages/ChiSiamo.jsx"
import Test from "./pages/Test.jsx"

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
          <Route path="/post/:id" element={<Prodotto />} />

        </Route>

        <Route path="/test" element={<Test />} />

      </Routes>

    </BrowserRouter>



  )

}