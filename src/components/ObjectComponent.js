import { useEffect, useState } from "react";
const ObjectComponent = (props) => {

    console.log("Object Component");

    const [objectData, setObjectData] = useState({});

    // optionally, state can be initialized with useEffect(); 
    useEffect(() => {
        console.log('child object useEffect');
        setObjectData({eid:101,
                       ename: "Akshay",
                       salary:28.5});
    }
        , []);

    const childObjectFun = () => {
        console.log('childObjectFun');
        return objectData;
    }

    
    return (
        <div>
            <p className="display-4 text-primary">Object Component</p>

            <p> Child object in object component :  {objectData}</p>

            
            <button className="btn btn-success" onClick={() => { props.createObject(childObjectFun) }} >
                Pass object From child To parent</button>


        </div>
    );
}

export default ObjectComponent;