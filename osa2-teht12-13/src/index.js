import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            countries: [],
            show: false,
            name:''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.getCountries = this.getCountries.bind(this);
        this.handlePickCountry = this.handlePickCountry.bind(this);
    }

    getCountries(){
        axios.get('https://restcountries.eu/rest/v2/name/'+ this.state.name)
        .then(response => {
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

    handlePickCountry(name){
        this.setState({
            name: name
        })
        this.getCountries();
    }

    render(){
        console.log(this.state.countries);
        console.log(this.state.name);

        const listing = () => {
            if(this.state.show){
                if (this.state.countries.length === 1){
                    return <FullCountry country={this.state.countries[0]} />;
                } else {
                    return <List countries={this.state.countries} action={this.handlePickCountry} />;
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
    const listing = () => countries.map(country => <Country key={country.name} name={country.name} action={props.action}/>)
    return(
        <div>
            {listing()}
        </div>
    )
}

const Country = (props) => {
    return (
        <div onClick={() => props.action(props.name)}>
            <p>{props.name}</p>
        </div>
    )
}

const FullCountry = (props) => {
    const country = props.country;

    if (country){
        return (
            <div>
                <h3>{country.name}</h3>
                <h5>Population: {country.population}</h5>
                <img src={country.flag} width={'200px'} alt={"Flag"}/>
            </div>
        )
    } else {
        return(
            <div>No Data</div>
        )
    }
    
}
ReactDOM.render(<App />, document.getElementById('root'));
