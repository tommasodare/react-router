import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"


export default function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<HomePage />} />
          <Route path="/chi-siamo" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </>



  )

}