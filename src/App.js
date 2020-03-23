import React from 'react';
import styles from './App.module.css';
import CalculateBlock from "./CalculateBlock";

class App extends React.Component {

    state = {
        counter: 0,
        name: "",
    };

    changeState = (inputValue) => {
        const newCount = this.state.counter + 1;
        this.setState({
            counter: newCount,
            name: inputValue,
        });
    };

    render() {
        return (
            <div className={styles.app}>
                <CalculateBlock state={this.state} changeState={this.changeState}/>
            </div>
        );
    }
}

export default App;
