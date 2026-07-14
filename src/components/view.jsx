import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-all").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NavigationBar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">

                            {
                                data.map((value, index) => {
                                    return (

                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={index}>

                                            <div className="card shadow h-100">

                                                <div className="card-body">

                                                    <h5 className="card-title">
                                                        {value.name}
                                                    </h5>

                                                    <p className="card-text">
                                                        <b>Department :</b> {value.dep} <br />
                                                        <b>Semester :</b> {value.sem} <br />
                                                        <b>Course :</b> {value.course} <br />
                                                        <b>System Number :</b> {value.systemNumber} <br />
                                                        <b>Login Time :</b> {value.loginTime} <br />
                                                        <b>Logout Time :</b> {value.loginOut}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default View