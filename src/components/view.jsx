import React, { useEffect, useState } from 'react'
import NavigationBar from './nav'
import axios from 'axios'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3000/view-lab")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NavigationBar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">

                            {data.map((value, index) => (
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
                            ))}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default View