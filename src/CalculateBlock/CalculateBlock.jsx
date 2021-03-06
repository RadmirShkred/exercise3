import React from 'react';
import classes from '../App.module.css';

class CalculateBlock extends React.Component {

    state = {
        currentName: '',
        inputClassChange: true,
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onClickChange();
        }
    };

    onTypeChange = (e) => {
        const newLetter = e.currentTarget.value;
        this.setState({currentName: newLetter});
    };

    onClickChange = () => {
        const inputValue = this.state.currentName;
        if (inputValue !== '') {
            this.props.changeState(inputValue);
            this.setState({inputClassChange: true})
        } else {
            this.setState({inputClassChange: false})
        }
        this.setState({currentName: ''});
    };

    render() {
        const inputClass = this.state.inputClassChange ? classes.input : classes.inputError;
        return (
            <div className={classes.container}>
                <span className={classes.number}>{this.props.state.counter}</span>
                <input type="text"
                       onChange={this.onTypeChange}
                       className={inputClass}
                       value={this.state.currentName}
                       onKeyPress={this.onKeyPress}
                />
                <button
                    onClick={this.onClickChange}
                    className={classes.button}>
                    Ввести
                </button>
                <div className={classes.names}>
                    {this.props.state.names.map((name, index) => <div className={classes.name}
                                                                      key={index + 1}>{name}</div>)}
                </div>
            </div>
        );
    }
}

export default CalculateBlock;
