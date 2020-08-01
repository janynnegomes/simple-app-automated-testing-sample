import { Component, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple App';
  tasks = []

  formTask = new FormGroup({
    title: new FormControl([''],Validators.required),
    description: new FormControl(''),
  });

  @ViewChild('inputTitle', {static: false}) inputTitle: ElementRef;

  saveNewTask(){
    if(this.formTask.valid){     
      const task = {title:this.formTask.value.title,description:this.formTask.value.description}
      //save the task into list
      this.tasks.push(task)      
      //TODO: update UI list of tasks
      
      //clear the form values
      this.formTask.reset();
      this.inputTitle.nativeElement.focus();
      
    }
  }
  
  
}
