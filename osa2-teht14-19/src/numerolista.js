import React from 'react';

const NumeroLista = (props) => {
    const {list} = props;
    const filter = new RegExp(props.filter, 'i');
    const listing = () => list.map(h => {
        if (filter.test(h.name)){
            return (<Numero key={h.name} name={h.name} number={h.num} id={h.id} action={props.action} />)
        }
        return false;
    });

    return (
        <div>
            <h2>Numerot</h2>
            <table>
                <tbody>
                    {listing()}
                </tbody>
            </table>
        </div>
    );
}

const Numero = (props) => {
    return (
        <tr>
            <th>{props.name}</th>
            <th>{props.number}</th>
            <th><button onClick={() => props.action(props.id,props.name)} >Poista</button></th>
        </tr>
    )
}

export default NumeroLista;