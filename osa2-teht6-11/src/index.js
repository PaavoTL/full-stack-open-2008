import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import NumeroLista from './numerolista'
import LisaaUusi from './lisaauusi'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: '',
      }

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleNumberChange = this.handleNumberChange.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        axios.get('http://localhost:3001/persons')
        .then(response => {
            console.log(response);
            this.setState({persons: [...response.data]
            })
        });
    }


    handleNameChange(e) {
        this.setState({
            newName: e.target.value
        })
    }

    handleNumberChange(e) {
        this.setState({
            newNumber: e.target.value
        })
    }

    handleFilterChange(e) {
        this.setState({
            filter: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        
        if(this.state.persons.some(person => person.name === this.state.newName)){
            alert(this.state.newName + ' already exists');
            return;
        }
        
        const newPerson = {name: this.state.newName, num: this.state.newNumber}
        const arr = this.state.persons;
        
        this.setState({
            persons: [...arr,newPerson],
            newName: ''
        })
    }
  
    render() {
      return (
        <div>
            <h2>Puhelinluettelo</h2>
            rajaa näytettäviä: <input onChange={this.handleFilterChange} value={this.state.filter} />
            <LisaaUusi actions={[this.handleNameChange, this.handleNumberChange, this.handleSubmit]} values={[this.state.newName, this.state.newNumber]}/>
            <NumeroLista list={this.state.persons} filter={this.state.filter} />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));