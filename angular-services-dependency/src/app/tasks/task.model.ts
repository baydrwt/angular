import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export type TaskStatusOption = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

export const TASK_STATUS_OPTION = new InjectionToken<TaskStatusOption>(
  'task-status-option'
);

export const TaskStatusOption: TaskStatusOption = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed',
  },
];

export const taskStatusOptionProvider: Provider = {
  provide: TASK_STATUS_OPTION,
  useValue: TaskStatusOption,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
