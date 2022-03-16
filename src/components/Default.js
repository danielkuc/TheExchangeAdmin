import React from 'react'

const Default = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center pt-5">
          <p className="h1 display-3">
            404
          </p>
          <p className="h1">Error</p>
          <p className="h2">Page not found</p>
          <p className="h3">URL <span className="text-danger">{window.location.href}</span> not found</p>
        </div>
      </div>
    </div>
  )
}

export default Default
