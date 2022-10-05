import React from "react";
import './bar.css'


const Bar = (props) => {

    const notesElements = props.notes.map((note) => {
        return (
            <div 
                key={note.id}
                onClick={() => props.setId(note.id)}
                className={`note ${note.id === props.currentId ? 'selected' : ''}`} 
            >
                <div className="flex">
                    <div className="note__wrapper">
                        {note.body.split('\n')[0]}
                    </div>
                    <div className="note__delete" onClick={() => props.handleDelete(note.id)}>
                            <span></span>
                            <span></span>
                    </div>
                </div>
            </div>

        )
    })

    return (

        <div className="bar">
            <div className="bar__header">
                <h1>notes</h1>
                <button className='bar__button--add' onClick={props.handleAdd} >add new task</button>
            </div>

            {notesElements}

        </div>
        // onClick={props}
    )
}

export default Bar