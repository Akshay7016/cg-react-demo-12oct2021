
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);      // initial value

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/hello" >Hello</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/emp" >Emp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/spring" >Spring</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;


//----------------------------------------------------------------------------------------------------



// import { Link } from "react-router-dom";
// const Header = () => {

//     return (
//         <header class="header sticky-top">
//             <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container">
//                     <Link className="navbar-brand" to="/">
//                         <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                             height="24px" alt="Capgemini" />
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarResponsive">
//                         <ul class="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/hello" >Hello</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/emp" >Emp</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/dep" >Dep</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/spring" >Spring</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/register" >Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login" >Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/logout" >Logout</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


// export default Header;


//----------------------------------------------------------------------------------------------------


// Component have two types
// 1) Functional component
// 2) class component

// // Function Component -> must return some value
// const Header = () => {

//     //jsx
//     return (
//         <div>
//             <p>Header Component</p>
//         </div>
//     );

// }

// export default Header;


// // Class component -> must have render() method
// import React from "react";
// class Header extends React.Component {

//     // constructor(){ super();}

//     render = () => {
//         return (                        // returns single element - <div> (inside <div> can have many elements)
//             <div className="disply-4">
//                 <p>Header component</p>
//             </div>
//         )
//     }
// }

// export default Header;
