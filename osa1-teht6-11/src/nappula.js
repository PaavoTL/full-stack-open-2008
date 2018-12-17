import React from 'react';

export default class Nappula extends React.Component {
    
    constructor(props){
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress (type){
        this.props.handlefeedback(type);
    }

    render(){
        return (
            <button onClick={() => this.handlePress(this.props.type)}>{this.props.name}</button>
        )
    }   
}