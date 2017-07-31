import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 notes: any[] = [
   {title: 'First', note: "Its Working :-)", priority: 'important'},
   {title: 'Second', note: "Colors added yo show priority", priority: 'general'},
   {title: 'Third', note: "Try adding notes and deleting :-)", priority: 'critical'}
 ]
 
  pushingNewNote(addingNote){
   console.log("trying to add new Note to the array")
    this.notes.push(addingNote);
 }

 removingNote(index){
   console.log(index);
   console.log(this.notes)
   this.notes.splice(index,1);
   console.log(this.notes)
 }
}
