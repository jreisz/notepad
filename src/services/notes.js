import uuid from 'uuid/dist/v4'

export class NotesService {

    constructor(data){
        this.notes = data
    }
    getNotes(){
        return this.notes
    }
    update(updateCb){     
        const clone = [...this.notes]
        updateCb(clone)        
        this.notes = clone
    }
     saveNote(note){        
        const index = this.notes.findIndex(({ id }) => note.id === id )
        if (index === -1) {
            note.id = uuid()
            this.update(notes => notes.push(note))
        } else {
            this.update(notes => notes.splice(index, 1, note))
        }

        return note
    }
}
