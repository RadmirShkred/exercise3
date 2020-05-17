import React from 'react';
import classes from './Monday.module.css';
import CalculateBlock from "../CalculateBlock";

const Monday = (props) => {
    return (
        <div className={classes.monday}>
            <CalculateBlock
                state={props.state}
                changeState={props.changeState}
            />
        </div>
    );
}

export default Monday;
