import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId !: string;
  @Input({ required : true }) name !: string;
  isAddingTask = false;
  // private tasksService = new TasksService();
  // private tasksService : TasksService;
  // @Input() name ?: string;
  // @Input() name : string | undefined;

  // dependency injection
  constructor(private tasksService: TasksService) {
    // this.tasksService = tasksService
  }

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id : string){
    // this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    // this.tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userId: this.userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date,
    // });
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }


}
