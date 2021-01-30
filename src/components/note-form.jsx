import React from 'react'

export class NoteForm extends React.Component {
    constructor(props) {
        super(props)        
        this.onChange = this.onChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.props.onChange({
            ...this.props.note,
            [e.target.name]: e.target.value
        });
    }
    onCancel() {        
        this.props.onCancel();
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.note)
    }
    render() {
        return <form>
            <div className="form-group">
                <label>Title:</label>
                <input
                    className="form-control"
                    data-testid="input-title"
                    name="title"
                    onChange={this.onChange}
                    value={(this.props.note === null ? '' : this.props.note.title)}
                />
            </div>
            <div className="form-group">
                <label>Note:</label>
                <textarea
                    className="form-control"
                    data-testid="input-text"
                    name="text"
                    onChange={this.onChange}
                    value={(this.props.note === null ? '' : this.props.note.text)}
                />
            </div>
            <div className="form-group">
                <input
                    type="button"
                    onClick={this.onCancel}
                    data-testid="cancel-note"
                    className="btn btn-default pull-right"
                    value="Cancel"
                />
                <input
                    type="submit"
                    data-testid="save-note"
                    onClick={this.onSubmit}
                    className="btn btn-default pull-right"
                    value="Save"
                />
            </div>
        </form>
    }
}
