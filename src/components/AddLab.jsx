import React, { useState } from 'react'
import Nav from './nav'
import axios from 'axios'

const AddLab = () => {

    const [input, changeData] = useState({

        name: "",
        dep: "",
        sem: "",
        course: "",
        systemNumber: "",
        loginTime: "",
        loginOut: ""

    })

    const inputHandler = (event) => {
        changeData({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add", input).then(
            (response) => {
                console.log(response.data)
                alert("Lab Added Successfully")
            }
        ).catch(
            (error) => {
                console.error("Error Adding Lab :", error)
                alert("Failed to Add Lab")
            }
        )
    }

    return (
        <div>

            <Nav />

            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h3 className="text-center mb-4">ADD LAB DETAILS</h3>

                        <div className="row g-3">

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Name :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Department :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="dep"
                                    value={input.dep}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Semester :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="sem"
                                    value={input.sem}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Course :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={input.course}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">System Number :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="systemNumber"
                                    value={input.systemNumber}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Login Time :</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="loginTime"
                                    value={input.loginTime}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Logout Time :</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="loginOut"
                                    value={input.loginOut}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                                <button className="btn btn-success" onClick={readValue}>ADD LAB</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddLab