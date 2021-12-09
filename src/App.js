
import Routes from "./Routes";

const App = () => {
  return (
    <div className="bg-light">
      <Routes />
    </div>
  );
}
export default App;


//-----------------------------------------------------------------------------------------

// import './App.css';
// // import { useEffect, useState } from "react";
// import Header from './components/Header';
// // import EmpData from './components/EmpData';
// // import Name from './components/Name';
// import Hello from './components/Hello';
// import Register from './components/Register';
// import AddEmployee from './components/SpringBootApplication/AddEmployee';
// import Login from './components/Login';
// import SpringBootData from './components/SpringBootData';


// const App = () => {
//   // console.log('Parent Component');

//   // const num = 10;
//   // const myData = { a: 1, b: 2, c: 3 };
//   // const myArray = [10, 20, 30];
//   //--------------------------------------------------------------------------------
//   // // let dataFromChild = 0;
//   // const [dataFromChild, setDataFromChild] = useState(4);

//   // useEffect(() => {
//   //   console.log('parent useEffect');
//   //   setDataFromChild(5);
//   // }, []);

//   // const parentFun = (arg) => {
//   //   console.log('parentFun');
//   //   setDataFromChild(arg()); // callback
//   //   console.log(dataFromChild);
//   // }

//   //--------------------------------------------------------------------------------

//   // const [childNameFromChild, setChildNameFromChild] = useState('');

//   // useEffect(() => {
//   //   console.log('parent name useEffect');
//   //   setChildNameFromChild("Akshay");
//   // }, []);

//   // const parentNameFun = (arg) => {
//   //   console.log('parentNameFun');
//   //   setChildNameFromChild(arg()); // callback
//   //   console.log(childNameFromChild);
//   // }

//   //--------------------------------------------------------------------------------

//   return (                                //returning single component i.e <div>
//     <div>
//       <Header />
//       <div className="container">
//         <p className="display-4 text-primary" >CG React App</p>

//         {/* <Hello /> */}
//         {/* <Register /> */}
//         {/* <Login /> */}
//         {/* <AddEmployee /> */}

//         <SpringBootData />

//         {/* <p>Child data in parent component: {dataFromChild} </p>
//         <p>Child name in parent component: {childNameFromChild} </p>

//         <p>{num}</p> */}


//         {/* This will not work -> As we can cannot print object directly . Use members of object */}
//         {/* <p>{myData}</p> */}

//         {/* <h6>Object data</h6>
//         <p>{myData.a} </p>
//         <p>{myData.b} </p>

//         <h6>Array data</h6>
//         <p>{myArray}</p>
//         <p>{myArray[0]}</p>

//         <EmpData numToPassToChild={num}
//           anotherData='20'
//           someData={myData}
//           someArray={myArray}
//           callParentFun={parentFun}
//         />
        
//         <Name anotherFunction = {parentNameFun}/> */}

//       </div>
//     </div>
//   );
// }

// export default App;

//----------------------------------------------------------------------------------------------------------

// function App() {
//   return (
//     <div className="App">
//     <h1>CG React App</h1>
//     <p>Welcome to Capgemini React App...</p>
//     </div>
//   );
// }

// export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p> Akshay Sajgule
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

