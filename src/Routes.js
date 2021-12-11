import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import SpringBootData from "./components/SpringBootData";
import Home from './components/Home';
import Hello from './components/Hello';
import Page404 from './components/Page404';
import Logout from './components/Logout';


const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);        // initail value is false, So login page will be displayed

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/hello"> <Hello /> </Route>
                                <Route path="/emp"> <EmpData /> </Route>
                                <Route path="/spring"> <SpringBootData /> </Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}



export default Routes;



//----------------------------------------------------------------------------------------------------

// const Routes = () => {

//     return (
//         <div>
//             <Router>
//                 <div>
//                     <Header />                       {/*  Header will look everytime */}
//                     <div>
//                         <Switch>
//                         <Route exact path="/"> <Home /> </Route>
//                             <Route path="/home"> <Home /> </Route>
//                             <Route path="/hello"> <Hello /> </Route>
//                             <Route path="/emp"> <EmpData /> </Route>
//                             <Route path="/dep"> <DepData /> </Route>
//                             <Route path="/spring"> <SpringBootData /> </Route>
//                             <Route path="/login"> <Login /> </Route>
//                             <Route path="/register"> <Register /> </Route>
//                             <Route path="/logout"> <Logout /> </Route>
//                             <Route path="/*"> <Page404 /> </Route>
//                         </Switch>
//                     </div>
//                     {/* <Footer /> */}
//                 </div>
//             </Router>
//         </div>
//     );
// }

// export default Routes;