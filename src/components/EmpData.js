
// useDispatch - send data to store,  useSelector - fetch data from store 


import { getEmpById,getAllEmps } from "../redux/EmpSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Employee from "./models/Employee";

// step 4 - use redux store and reducers in components 

const EmpData = (props) => {

    // ctearing state is not required with redux  
    // const [variable, setVariable] = useState('');

    const [emp, setEmp] = useState(new Employee());

    const dispatch = useDispatch();               // send data to store

    // this data is coming from store 
    // const empDataFromStore = useSelector((arg) => {return arg.nameOfTheState.data});
    // const empDataFromStore = useSelector((arg) =>  arg.nameOfTheState.data );

    const empDataFromStore = useSelector((state) => state.emp.empState);
    const empList = useSelector((state) => state.emp.empList);

    const handleEmp = (e) => {
        console.log('handleEmp');
        setEmp({
            ...emp,
            [e.target.name]: e.target.value
        });
    }

    const submitGetEmpById = (evt) => {
        evt.preventDefault();
        console.log('submitGetEmpById');
        axios.get(`getempbyid/${emp.eid}`)
            .then((response) => {
                dispatch(getEmpById(response.data));                       // Sending data to redux store
                setEmp({ eid: '' });
                // setEmp(response.data);
            })
            .catch(() => {
                alert("Employee not found.");
                setEmp({ eid: '' });
                dispatch(getEmpById(emp));
            });
    }


    const submitGetAllEmps = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllEmps');
        axios.get(`getallemp`)
            .then((response) => {
                dispatch(getAllEmps(response.data));
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }


    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Employee Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find employee by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetEmpById}>
                    <input className="form-control mt-3" type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Enter eid to search" autoFocus />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
                </form>
                <p>Data from store: {empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary} </p>
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all employees</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllEmps} value="Find All Employees" />
                        </form>
                    </div>
                    <table className="table table-light table-striped">
                        <thead>
                            <tr>
                                <th>Eid</th>
                                <th>Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empList.map((emp, k) => {
                                return (
                                    <tr k={k}> <td>{emp.eid}</td>  <td>{emp.firstName}</td> <td>{emp.salary}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default EmpData;


//----------------------------------------------------------------------------------------------------------


// const EmpData = (props) => {
//     console.log('Child component');
//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3" >Employee Data Component</h1>
//             <p>Employee data component</p>
//         </div>
//     );
// }
// export default EmpData;


//----------------------------------------------------------------------------------------------------------




// /* Props get paseed to the Component(similar to the function parameters) whereas 
// state is managed within the component(similar to local variables declared within a function) */

// // pass data
// // 1. From parent component to child component - props
// // 2. From child component to parent component

// import { useEffect, useState } from "react";

// const EmpData = (props) => {
//     console.log('Child component');

//     // state - one object for a component to store all the data in that component
//     // in function component, state can be created with useState(); hook (hook means method)    
//     // syntax const [variableName, setVariableName] = useState(initial value);
//     // const [eid, setEid] = useState(0);
//     // const [ename, setEname] = useState('');
//     // const [isAvailable, setIsAvailable] = useState(false);
//     // const [emp, setEmp] = useState({});
//     // const [cities, setCities] = useState([]);

//     // const childData = 2211;
//     const [childData, setChildData] = useState(1);
//     // const [childData2, setChildData2] = useState(2);     // can have multiple states

//     // optionally, state can be initialized with useEffect(); 
//     useEffect(() => {
//         console.log('Child useEffect');
//         setChildData(41548);
//     }
//         , []);

//     const childFun = () => {
//         console.log('childFun');
//         return childData;
//     }


//     return (
//         <div>
//             <p className="display-4 text-primary">Employee Data Component</p>

//             <p> Child data in child component :  {childData}</p>

//             <h6>Normal Values</h6>
//             <p>{props.numToPassToChild} {props.anotherData}</p>
//             <p>{props.anotherData}</p>

//             <h6>Object data</h6>
//             {/* <p>{props.someData}</p> */}  {/* cannot access object directly. Access values of object */}
//             <p>{props.someData.a}</p>
//             <p>{props.someData.c}</p>

//             <h6>Array data</h6>
//             <p>{props.someArray[0]}</p>
//             <p>{props.someArray[2]}</p>

//             {/* Invoke function from parent  */}
//             {/* <p>{props.callParentFun}</p> */}
//             <button className="btn btn-success" onClick={() => { props.callParentFun(childFun) }} >
//                 Pass data From child To parent</button>


//         </div>
//     );
// }

// export default EmpData;