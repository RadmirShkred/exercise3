import React, {Component} from 'react';
import classes from './Monday.module.css';
import CalculateBlock from "../CalculateBlock";

class Monday extends Component {

    state = {
        counter: 0,
        names: [],
    };

    changeState = (inputValue) => {
        const newCount = this.state.counter + 1;
        const namesList = [...this.state.names, inputValue];
        this.setState({
            counter: newCount,
            names: namesList,
        });
    };

    render() {
        return (
            <div className={classes.monday}>
                <CalculateBlock
                    state={this.state}
                    changeState={this.changeState}
                />
            </div>
        );
    }
}

export default Monday;
