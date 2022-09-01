import React, { useState } from "react"
import Tabs from "./components/Tabs"
import "./cyborg_bootstrap.css"

const App = () => {
  const [content, setContent] = useState("")

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8">
          <div className="card">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <Tabs setContent={setContent} />
              </ul>
            </div>
            <div className="card-body">
              <p className="text-center">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
