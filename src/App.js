import React from 'react';
import classes from './App.module.css';
import Monday from "./Monday";
import Navbar from "./Navbar";
import {Route} from "react-router";
import Tuesday from "./Tuesday";

class App extends React.Component {

    state = {
        counter: 0,
        key: 0,
        names: [],
    };

    changeState = (inputValue) => {
        const newCount = this.state.counter + 1;
        const namesList = [...this.state.names, inputValue];
        this.setState({
            counter: newCount,
            key: newCount,
            names: namesList,
        });
    };

    render() {
        return (
            <div className={classes.app}>
                <Navbar/>
                <Route path="/monday"
                       render={() => <Monday
                           state={this.state}
                           changeState={this.changeState}
                       />}
                />
                <Route path="/tuesday"
                       render={() => <Tuesday/>}
                />
            </div>
        );
    }
}

export default App;
