export type ID = string;

export interface TaskStatus {
  id: ID;
  name: string;
}

export interface Task {
  id: ID;
  title: string;
  description: string;
  status: TaskStatus;
  assignee?: User;
  labels?: Label[];
  comments?: Comment[];
  attachments?: Attachment[];
  createdAt: Date;
}

export interface Column {
  id: ID;
  name: string;
  tasks: Task[];
}

export interface User {
  id: ID;
  name: string;
  tasks: Task[];
}

export interface Label {
  id: ID;
  name: string;
  color: string;
}

export interface Comment {
  id: ID;
  user: User;
  task: Task;
  content: string;
}

export interface Attachment {
  id: ID;
  task: Task;
  file: File;
}

export interface Activity {
  id: ID;
  user: User;
  action: string;
  timestamp: Date;
}
