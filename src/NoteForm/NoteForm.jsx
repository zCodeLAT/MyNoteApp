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

    keyPressed(event) {
        var x = event.keyCode;
        if (x === 13) {  // 13 is the Enter key
            console.log('Press the button');
        }
      }

    render(){
        return (
        <div className="NoteForm">
            <input
            ref={input => {this.textInput = input;}} 
            placeholder="Write a note"
            type="text"
            onKeyDown={this.keyPressed}
            tabIndex="0"
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