import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            countries: [],
            show: true,
            name:'finland'
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.getCountries = this.getCountries.bind(this);
    }

    componentDidMount(){
        this.getCountries();
    }

    getCountries(){
        axios.get('https://restcountries.eu/rest/v2/name/'+ this.state.name)
        .then(response => {
            console.log(response);
            if(response.data.length < 11){
                this.setState({
                    countries: response.data,
                    show: true
                });
            } else {
                this.setState({
                    countries:[],
                    show: false
                })
            }
        })
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
        this.getCountries();
    }

    render(){
        const listing = () => {
            if(this.state.show){
                if (this.state.countries.length = 1){
                    return <FullCountry country={this.state.countries[0]} />;
                } else {
                    return <List countries={this.state.countries} />;
                }
            } else {
                return 'Too many or no results to show'
            }
        }

        return(
            <div>
                <h2>
                    find countries: <input onChange={this.handleNameChange} value={this.state.name}/>
                </h2>
                {listing()}
            </div>
        )
    }
}

const List = (props) =>{
    const {countries} = props;
    const listing = () => countries.map(country => <Country key={country.name} name={country.name} />)
    return(
        <div>
            {listing()}
        </div>
    )
}

const Country = (props) => {
    return (
        <p>{props.name}</p>
    )
}

const FullCountry = (props) => {
    const country = props.country;

    if (country){
        return (
            <div>
                <h3>{country.name}</h3>
                <h5>Population: {country.population}</h5>
                <img src={country.flag}/>
            </div>
        )
    } else {
        return(
            <div>No Data</div>
        )
    }
    
}
ReactDOM.render(<App />, document.getElementById('root'));
