import { Component, OnInit, Input, Directive, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() myNotes; 
  @Input() className;
  @Output() removeNoteFromArray = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeNote(index){
    console.log("remove note ");
    console.log(index);
    this.removeNoteFromArray.emit(index);
  }
}

// @Directive({
//   selector: "input[text]"
// })
