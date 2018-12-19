import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas' }
        ],
        newName: ''
      }
    }
  
    render() {
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <form>
            <div>
              nimi: <input />
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          ...
        </div>
      )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));