import React from 'react'

import { NotesList } from './notes-list'
import { NoteForm } from './note-form'

export class App extends React.Component {

    constructor(props) {
        super(props)

        this.service = this.props.service
        this.state = {
            selected: null
        }

        this.onSelect = this.onSelect.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        const note ={title:'', text:''}
        this.setState({
            selected: note
        })
    }
    onSelect(note) {
        this.setState({
            selected: note
        })
    }
    onSubmit(note) {                
        this.service.saveNote(note)
        this.setState({
            selected: note
        })
        this.props.service.getNotes()
    }
    onChange(note) {
        this.setState({
            selected: note
        })
    }
    onCancel() {
        this.setState({
            selected: null
        })
    }
    componentDidMount() {        
        this.props.service.getNotes()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>React notes</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NotesList onSelect={this.onSelect} selected={this.state.selected} notes={this.props.service.notes} />
                    </div>
                    <div className="col-md-8">
                        <NoteForm onCancel={this.onCancel} onSubmit={this.onSubmit} onChange={this.onChange} note={this.state.selected} />
                        {this.state.selected === null &&
                            <div><button data-testid="new-note" id="new-note" onClick={this.onClick}>New Note</button></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
