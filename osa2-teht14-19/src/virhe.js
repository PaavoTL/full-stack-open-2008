import React from 'react';

const Note = (props) => {
    if (props.note === null) {
        return null;
    } else {
        
        return (
            <div className="noteclass">
                {props.note}
            </div>
        )
    }
}

export default Note;