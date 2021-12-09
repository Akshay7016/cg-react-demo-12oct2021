// import { getDepById } from "../redux/DepSlice";
import { useSelector } from "react-redux";
// import axios from "axios";
// import { useState } from "react";

// step 4 - use redux store and reducers in components 

const DepData = () => {

    // ctearing state is not required with redux  
    // const [variable, setVariable] = useState('');

    // const dispatch = useDispatch();

    // this data is coming from store 
    const depDataFromStore = useSelector((state) => state.dep.depState);


    return (
        <div>
            <h1 className="display-4 text-primary mt-3" >Department Data Component</h1>
            <p>Department data component</p>
            <p>Data from store: {depDataFromStore.did} {depDataFromStore.departmentName}</p>
        </div>
    );
}
export default DepData;