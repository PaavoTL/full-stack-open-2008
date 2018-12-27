import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios'
import server from './axios-module'
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
      this.handleRemove = this.handleRemove.bind(this);
    }
    
    componentDidMount(){
        server.getAll()
        .then(response => {
            console.log(response);
            this.setState({persons: response});
        })
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
            let answer = window.confirm(this.state.newName + " already exists. Replace old number?");
            if(answer){
                let number = this.state.newNumber;
                let newArr = [...this.state.persons];
                let id = 0;
                
                newArr.forEach(person => {
                    id ++;
                    if(person.name === this.state.newName){
                        person.num = number;
                     server.update(id, person);
                    }
                    return person;
                })

                this.setState({
                    persons: [...newArr],
                    newName: '',
                    newNumber: ''
                })
            }
            return;
        }
        
        const newPerson = {name: this.state.newName, num: this.state.newNumber}
        const arr = this.state.persons;

     server.create(newPerson)
        
        this.setState({
            persons: [...arr,newPerson],
            newName: '',
            newNumber: ''
        })
    }
  
    handleRemove(id,name){
        let answer = window.confirm(`Remove ${name} from the list?`)
        if (answer) {
            server.remove(id);
            let newArr = [...this.state.persons];
            newArr.splice(id-1,1)
            
            this.setState({
                persons: [...newArr]
            })
        }
    }
    
    render() {
      return (
        <div>
            <h2>Puhelinluettelo</h2>
            rajaa näytettäviä: <input onChange={this.handleFilterChange} value={this.state.filter} />
            <LisaaUusi actions={[this.handleNameChange, this.handleNumberChange, this.handleSubmit]} values={[this.state.newName, this.state.newNumber]}/>
            <NumeroLista list={this.state.persons} filter={this.state.filter} action={this.handleRemove} />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));