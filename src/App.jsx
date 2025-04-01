import { BrowserRouter } from "react-router-dom"

export default function App() {

  return (

    <>
      <header>
        <nav className="navbar bg-info">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="data:image/png;base64,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" alt="Bootstrap" width="30" height="30" />
            </a>
            <div>
              <a className="navbar-brand" href="#">Home</a>
              <a className="navbar-brand" href="#">Post</a>
              <a className="navbar-brand" href="#">Chi Siamo</a>
            </div>
          </div>
        </nav>
      </header>

      <main>

        <div className="jumbotron bg-dark">
          <h1 className="text-white text-center">This is my Website</h1>
        </div>

      </main>

      <footer>

        <div className="bg-info text-center py-3">
          <p className="mb-0 text-white">© 2023 My Website. All rights reserved.</p>
          <div>
            <a href="#" className="text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-white mx-2">Terms of Service</a>
            <a href="#" className="text-white mx-2">Contact Us</a>
          </div>
        </div>

      </footer>

    </>



  )

}