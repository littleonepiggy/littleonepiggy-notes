import React from "react";
import Bar from "./bar/bar";
import Editor from "./editor/editor";
import { nanoid } from "nanoid";
import Split from "react-split";


const Home = () => {

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem('array'))
        || []
    );

    const [id, setId] = React.useState(
        notes[0] && notes[0].id) 
        || '';

    React.useEffect(() => {
        localStorage.setItem('array', JSON.stringify(notes))
    }, [notes])

    const handleNoteChange = (text) => {
        
        setNotes(prevNotes => {
            const list = [];
            prevNotes.forEach(note => {
                note.id === id ? list.unshift({...note, body:text})
                : list.push(note)  
            })
            return list
        })
    }

    const handleNoteAdd = () => {

        const newNote = {
            id: nanoid(),
            body: ""
        }

        setNotes(prevNotes => [...prevNotes, newNote]);
        setId(newNote.id);
    }

    const handleNoteDelete = (noteId) => {
        setNotes(prevNotes => prevNotes.filter(note => 
            note.id !== noteId
        ))
    }

    const currentNote = () => {
        return notes.find(note => {
            return note.id === id
        }) || notes[0]

    }

    return (
        <div className='container'>
            { notes.length > 0 ?
                <Split
                    sizes = {[20, 80]}
                    direction = "horizontal"
                    className = "split"
                    gutterSize = {15}
                    minSize = {[170, 150]}
                >
                    <Bar

                        notes = {notes}
                        handleAdd = {handleNoteAdd}
                        setId = {setId}
                        currentId = {id}
                        handleDelete = {handleNoteDelete}
                    />
                    <Editor
                        currentNote = {currentNote()}
                        handleChange={handleNoteChange}
                    />

                </Split>
            
            : 

            <div>
                <button className='button--add' onClick={handleNoteAdd} >add new task</button>
            </div>
            }
        </div>
    )
}

export default Home