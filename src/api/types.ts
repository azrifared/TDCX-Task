export type UserData = {
  image?: string;
  msg: string;
  token?: {
    name?: string;
    token?: string;
  };
};

export type TaskType = {
  completed: boolean;
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type AllTaskType = {
  msg: string;
  tasks: TaskType[];
};