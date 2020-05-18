import React from 'react';
import classes from './App.module.css';
import Monday from "./Monday";
import Navbar from "./Navbar";
import {Route} from "react-router";
import Tuesday from "./Tuesday";

class App extends React.Component {

    render() {
        return (
            <div className={classes.app}>
                <Navbar/>
                <Route path="/monday"
                       render={() => <Monday/>}
                />
                <Route path="/tuesday"
                       render={() => <Tuesday/>}
                />
            </div>
        );
    }
}

export default App;
