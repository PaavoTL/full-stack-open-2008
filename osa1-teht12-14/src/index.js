import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.votes = [];
        for(let i = 0; i < props.anecdotes.length; i++){
            this.votes.push(0)
        }

        this.state = {
            selected:0,
            votes: this.votes
        }

        this.changeSelected = this.changeSelected.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    changeSelected(){
        if (this.state.selected + 1 < this.props.anecdotes.length){
            this.setState({
                selected: this.state.selected + 1
            });

        } else {
            this.setState({
                selected: 0
            })
        }
    }

    handleVote(){
        this.votes[this.state.selected] += 1;
        this.setState({
            votes: this.votes
        })
    }

    render(){
        let highest = [0,0]
        
        for (let i = 0; i < this.votes.length; i++){
            if (this.votes[i] > highest[0]){
                highest = [this.votes[i],i];
                
            }
        }

        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]} <br/>
                on saanut {this.state.votes[this.state.selected]} ääntä</p>
                <Button name={"Äänestä"} action={this.handleVote} />
                <Button name={"seuraava"} action={this.changeSelected} />
                
                <h3>Eniten ääniä saanut anecdootti:</h3>
                <p>{this.props.anecdotes[highest[1]]} <br />
                on saanut {this.state.votes[highest[1]]} ääntä</p>
            </div>
        );
    }
}

function Button(props){
    return(
        <button onClick={props.action}>{props.name}</button>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

