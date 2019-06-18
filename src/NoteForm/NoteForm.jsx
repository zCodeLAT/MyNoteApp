import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
    }
    addNote(){
        this.props.addNote(this.textInput.value);
        this.textInput.value = ''; //Borra valor y vuelve a mostrar "Write a note"
        this.textInput.focus(); // Focus de cursor en el input
    }
    render(){
        return (
        <div className="NoteForm">
            <input
            ref={input => {this.textInput = input;}} 
            placeholder="Write a note"
            type="text"
            />

            <button
            onClick={this.addNote}
            >
                Add Note
            </button>
        </div>
        )
    }
}

export default NoteForm;