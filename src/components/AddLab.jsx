import React from 'react'

const AddLab = () => {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Department:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Semester:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Course:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">System Number:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Login Time:</label>
                <input type="time" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Logout Time:</label>
                <input type="time" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <br />
                <button className="btn btn-success">Submit</button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddLab