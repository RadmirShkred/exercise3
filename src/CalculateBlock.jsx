import React from 'react';
import styles from './App.module.css';

class CalculateBlock extends React.Component {
    constructor(props) {
        super(props);
        this.refInputChange = React.createRef();
    }

    onClickChange = () => {
        const inputValue = this.refInputChange.current.value;
        this.props.changeState(inputValue);
        this.refInputChange.current.value = "";
    };

    render() {
        return (
            <div className={styles.container}>
                <span className={styles.number}>{this.props.state.counter}</span>
                <input type="text" ref={this.refInputChange} className={styles.input}/>
                <button onClick={this.onClickChange} className={styles.button}>Ввести</button>
                <div className={styles.names}>
                    {this.props.state.names.map(name => <div className={styles.name}>{name}</div>)}
                </div>
            </div>
        );
    }
}

export default CalculateBlock;