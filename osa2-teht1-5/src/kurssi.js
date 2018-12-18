import React from 'react';

const Kurssi = (props) => {
    const {kurssit} = props;
    const kaikki = () => kurssit.map(kurssi => {
        return(
        <div key={kurssi.id}>
            <Otsikko otsikko={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteen osat={kurssi.osat} />
        </div>
        )
    })

    return (
        <div>
            {kaikki()}
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}

const Sisalto = (props) => {
    const {osat} = props;
    
    const kaikki = () => osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
    return (
        <div>
            {kaikki()}
        </div>
    )
}

const Osa = (props) => {
    return(
        <p>{props.nimi}: {props.tehtavia}</p>
    )
}

const Yhteen = (props) => {
    const {osat} = props;
    const yhteen = () => osat.reduce((yht ,osa) => yht + osa.tehtavia, 0);

    return (
        <p>yhteensä {yhteen()} tehtävää</p>
    )
}

export default Kurssi;