import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../../../domain/model/task.model';
import { TaskDeleteService } from '../../../../services/task/task-delete.service';
import { TaskReadService } from '../../../../services/task/task-read.service';
import * as fontawesome from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'task-sync-task-list',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  userId?: string;

  fa = fontawesome;

  faAdd = faPlus;
  tasks: Task[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskReadService: TaskReadService,
    private taskDeleteService: TaskDeleteService,
    private toastrService: ToastrService
  ) {

  }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = userId!;
    this.loadTasks();
  }

  async loadTasks() {
    this.tasks = await this.taskReadService.findAll();

    if (this.userId! != null){      
      this.tasks = this.tasks.filter(e => e.userId == this.userId);
    }
  }

  async deleteTask(taskId: string) {
    try {
      console.log('iniciando a remocao do tasko' + taskId);
      await this.taskDeleteService.delete(taskId);
      this.toastrService.success('Task excluida com sucesso');

      await this.loadTasks();
    } catch (error) {
      this.toastrService.error('Não foi possível remover a task');

    }

  }

}
