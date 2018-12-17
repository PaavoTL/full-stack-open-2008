import React from 'react';
import Nappula from './nappula.js'

export default function Nappulat(props) {
    return (
        <div>
            <Nappula type={"hyva"} name={"Hyvä"} handlefeedback={props.handlefeedback}/>
            <Nappula type={"neutraali"} name={"Neutraali"} handlefeedback={props.handlefeedback}/>
            <Nappula type={"huono"} name={"Huono"} handlefeedback={props.handlefeedback}/>
        </div>
    )
}