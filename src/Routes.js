import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import SpringBootData from "./components/SpringBootData";
import Home from './components/Home';
import Hello from './components/Hello';
import Page404 from './components/Page404';
import Logout from './components/Logout';
import DepData from './components/DepData';



const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />                       {/*  Header will look everytime */}
                    <div>
                        <Switch>
                        <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/hello"> <Hello /> </Route>
                            <Route path="/emp"> <EmpData /> </Route>
                            <Route path="/dep"> <DepData /> </Route>
                            <Route path="/spring"> <SpringBootData /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
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

export default Routes;