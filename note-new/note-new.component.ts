import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  
  @Output() addingNoteToArray = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  addingNewNotes = {
    title: '',
    note:  '',
    priority: ''
  }
  addNote(){
    console.log('adding Note and Emitting')
    this.addingNoteToArray.emit(this.addingNewNotes);
    this.addingNewNotes = {
      title:'',
      note:'',
      priority: ''
    }
  }
}
