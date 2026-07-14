import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand fw-bold" to="/">
            Lab App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <div className="navbar-nav ms-auto">

              <Link className="nav-link" to="/">
                Add
              </Link>

              <Link className="nav-link" to="/view">
                View
              </Link>

            </div>

          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavigationBar