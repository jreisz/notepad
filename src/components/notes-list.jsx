import React from 'react'

export class NotesList extends React.Component {
    onClickNote = (note) => {
        this.props.onSelect(note);
    }
    render() {
        const elements = this.props.notes.map(function (note, idx) {
            return <div style={{minHeight:'42px'}} key={note.id} data-testid="note-item" onClick={() => this.onClickNote(note)} className={"list-group-item " + ((this.props.selected == null ? '' : (this.props.selected.id === note.id ? 'active ' : ' ')))}  >{note.title}</div>;
        }.bind(this));
        return <div className="list-group">
            {elements}
        </div>
    }
}
