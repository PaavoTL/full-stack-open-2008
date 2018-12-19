import React from 'react';

const LisaaUuSi = (props) => {
    return(
        <div>
        <h4>Lisää uusi</h4>
        <form>
            <div>
                nimi: <input onChange={props.actions[0]} value={props.values[0]} />
            </div>
            <div>
                numero: <input onChange={props.actions[1]} value={props.values[1]} />
            </div>
            <div>
                <button type="submit" onClick={props.actions[2]} >lisää</button>
            </div>
        </form>
        </div>
    )
}

export default LisaaUuSi;