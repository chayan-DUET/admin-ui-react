import React from "react";
import {Route, Redirect, Switch } from "react-router-dom";
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts';
import Footer from "./Footer";
import Navebar from './Navbar';
import Sidebar from "./Sidebar";
import routes from "../../routes/routes";
const MasterLayout = () =>{
    return (
        <div className="sb-nav-fixed">
            <Navebar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div> 
                <div id="layoutSidenav_content">
                    <main>
                    <Switch>
                            {routes.map((route, index) =>{
                                return(
                                    route.component && (
                                        <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props}/>
                                        )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from ="admin" to="/admin/dashboard" />
                            
                    </Switch>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default MasterLayout;