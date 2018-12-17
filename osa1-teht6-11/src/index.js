import React from 'react';
import ReactDOM from 'react-dom';
import Nappulat from './nappulat.js'

class App extends React.Component {
    constructor (props){
        super(props);

        this.handlefeedback = this.handlefeedback.bind(this);

        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
        }
    }

    handlefeedback (type){
        this.setState({
            [type]: this.state[type] + 1
        })
    }

    render(){
        let yhteen = (this.state.hyva + this.state.neutraali + this.state.huono);
        let keskiarvo = (this.state.hyva * 1 + this.state.huono * -1) / yhteen;
        let positiivista = this.state.hyva / yhteen * 100;
        
        keskiarvo = keskiarvo.toFixed(2);
        positiivista = positiivista.toFixed(2);
        let palaute = (<h4>Ei yhtään palautetta annettu</h4>);

        let tableStyle = {
            textAlign: 'left'
        }

        if (yhteen !== 0){
            palaute = (
            <table style={tableStyle}>
                <tbody>
                    <tr>
                        <th>Hyvä:</th>
                        <th>{this.state.hyva}</th>
                    </tr>
                    <tr>
                        <th>Neutraali:</th>
                        <th>{this.state.neutraali}</th>
                    </tr>
                    <tr>
                        <th>Huono:</th>
                        <th>{this.state.huono}</th>
                    </tr>
                    <tr>
                        <th>Keskiarvo:</th>
                        <th>{keskiarvo}</th>
                    </tr>
                    <tr>
                        <th>Positiivista:</th>
                        <th>{positiivista}%</th>
                    </tr>
                </tbody>
            </table>)
        }

        return (
            <div>
                <h1>Anna palautetta</h1>
                <Nappulat handlefeedback={this.handlefeedback} />
                <h1>statistiikka</h1>
                {palaute}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));