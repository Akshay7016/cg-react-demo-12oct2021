import { useState, useEffect } from "react";

const Name = (props) => {

    console.log("Name Component");

    const [name, setName] = useState('');

    // optionally, state can be initialized with useEffect(); 
    useEffect(() => {
        console.log('child name useEffect');
        setName("Rohan");
    }, []);

    const childNameFun = () => {
        console.log('childNameFun');
        return name;
    }

    
    return (
        <div>
            <p className="display-4 text-primary">Name Component</p>

            <p> Child name in child component :  {name}</p>

            
            <button className="btn btn-success" onClick={() => { props.anotherFunction(childNameFun) }} >
                Pass name From child To parent</button>


        </div>
    );
}

export default Name;