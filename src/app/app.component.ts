import { Component, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple App';
  emptyList =  {title: 'Nothing here', description: 'You can start adding a new task'};
  formSubmited = false;
  tasks = new Map<string, {title: string, description: string, done: boolean}>();

  formTask = new FormGroup({
    title: new FormControl([''], [Validators.required, Validators.minLength(3)]),
    description: new FormControl(''),
  });

  @ViewChild('inputTitle', {static: false}) inputTitle: ElementRef;

  get allTasks(){
    return Array.from(this.tasks);
  }

  saveNewTask(): boolean{
    this.formSubmited = true;
    if (this.formTask.valid){

      const task = {title: this.formTask.value.title, description: this.formTask.value.description, done: false};
      // save the task into list
      this.tasks.set(uuid(), task);
      // TODO: update UI list of tasks

      // clear the form values
      this.formTask.reset();
      this.inputTitle.nativeElement.focus();

      return true;
    }
    else{
      return false;
    }
  }


}
