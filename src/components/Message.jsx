import React from 'react';
import {format} from "../emoji.js";
import styles from "./Message.css";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ styles.message } >
                {this.props.user}: {format(this.props.text)}
            </div>
        );
    }
}