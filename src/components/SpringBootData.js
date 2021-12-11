import axios from "axios";
import { useState } from "react";
import Employee from "./models/Employee";

const SpringBootData = () => {

    const [emp, setEmp] = useState(new Employee());
    const [newEmpObj, setNewEmpObj] = useState(new Employee());

    // eslint-disable-next-line
    const [displayEmpObj, setDisplayEmpObj] = useState(new Employee());
    const [empList, setEmpList] = useState([]);

    const handleEmp = (e) => {
        setEmp({
            ...emp,
            [e.target.name]: e.target.value
        });
    }

    const handleAddEmp = (e) => {
        console.log(e.target.value);
        setNewEmpObj({
            ...newEmpObj,
            [e.target.name]: e.target.value
        });
    }

    const submitGetEmpById = () => {
        console.log(emp.eid);
        // axios.get(`http://localhost:8082/emp/getempbyid/101`)
        axios.get(`http://localhost:8082/getempbyid/${emp.eid}`)
            .then((response) => {
                setEmp(response.data);
            })
            .catch(() => {
                setEmp({});
                alert("Employee not found.");
            });
    }

    // useEffect(() => {
    //     setNewEmpObj({});
    // }, []);

    // const submitAddEmp = (evt) => {
    //     axios.post(`http://localhost:8082/addemp`, newEmpObj)
    //         .then((response) => {
    //             setNewEmpObj(response.data);
    //             alert("Employee added successfully");
    //         })
    //         .catch(() => {
    //             alert("Employee could not be added.");
    //         });

    //     evt.preventDefault();
    // }

    const submitAddEmp = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/addemp`, newEmpObj)
            .then((response) => {
                setDisplayEmpObj(response.data);
                alert('Employee added successfully.');
                setNewEmpObj({ firstName: '', salary: 0 })
            })
            .catch(() => {
                alert("Employee could not be added.");
            });
    }



    const submitGetAllEmps = () => {
        axios.get(`http://localhost:8082/getallemp`)
            .then((response) => {
                setEmpList(response.data);
                console.log(response.data);
                // alert("Employee data retrieved successfully!")
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }


    return (
        <div>

            <h6>Search Employee By Id</h6>
            <div>
                <input type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Emter eid to search" />
                <input type="submit" name="Find Employee" onClick={submitGetEmpById} />
                <p>{emp.eid} {emp.firstName} {emp.salary}</p>
            </div>
            <p>-------------------------------</p>

            <div>
                <h6>Add New Employee</h6>
                <div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newEmpObj.firstName}
                        onChange={handleAddEmp}
                        placeholder="Enter First Name" /> <br /> <br />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={newEmpObj.salary}
                        onChange={handleAddEmp}
                        placeholder="Enter salary" /> <br /> <br />

                    <input className="button btn-success" type="button" value="Add Employee" onClick={submitAddEmp} />
                </div>
                <p>{newEmpObj.eid} {newEmpObj.firstName} {newEmpObj.salary}</p>
            </div>

            <p>-------------------------------</p>

            <div>
                <div>
                    <h6>Get All Employees</h6>
                    <input
                        type="button"
                        className="button btn-danger"
                        value="Search All Employees"
                        onClick={submitGetAllEmps}
                    />
                </div>

                <div>
                    {/* {empList} */}
                    {/* {empList.map((arg, arg2)=> { return the processed data })} */}
                    {empList.map((emp, key) => {
                        return (
                            <div key={key}>{emp.eid} {emp.firstName} {emp.salary} </div>
                        )
                    })}
                </div>
            </div>

            <p>-------------------------------</p>


        </div>
    );

}

export default SpringBootData;