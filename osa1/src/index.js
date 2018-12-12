import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = "Half Stack -sovelluskehitys";
    const osa1 = "Reactin perusteet";
    const tehtäviä1 = 10;
    const osa2 = "Tiedonvälitys propseilla";
    const tehtäviä2 = 7;
    const osa3 = "Komponenttien tila";
    const tehtäviä3 = 14;

    return(
        <div>
            <h1>{kurssi}</h1>
            <p>{osa1} {tehtäviä1}</p>
            <p>{osa2} {tehtäviä2}</p>
            <p>{osa3} {tehtäviä3}</p>
            <p>yhteensä {tehtäviä1 + tehtäviä2 + tehtäviä3}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
