import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props){
        super(props);

        this.muuta = this.muuta.bind(this);

        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
        }
    }

    muuta (nimi){
        console.log(nimi)
    }

    render(){
        return (
            <div>
                <h1>Anna palautetta</h1>
                <Nappulat action={this.muuta} />
                <h1>statistiikka</h1>
            </div>
        )
    }
}

const Nappulat = (props) => {
    return (
        <div>
            <Nappula nimi={"Hyvä"} action={props.muuta}/>
            <Nappula nimi={"Neutraali"} action={props.muuta}/>
            <Nappula nimi={"Huono"} action={props.muuta}/>
        </div>
    )
}

const Nappula = (props) => {
    return (
        <button onClick={() => props.muuta("nimi")}>{props.nimi}</button>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));