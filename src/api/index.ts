import { TaskType } from './types';

export const BASE_URL = 'https://dev.teledirectasia.com:3092';

export const fetchUserData = async (
  apiKey: string,
  name: string,
) => await fetch(
  `${BASE_URL}/login`,
  {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name, apiKey })
  }
).then((res)=> res.json());

export const fetchDashboardData = async (token: string) => await fetch(
  `${BASE_URL}/dashboard`,
  {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  }
).then((res)=> res.json());

export const postNewTask = async (token: string, name: string) => await fetch(
  `${BASE_URL}/tasks`,
  {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name === '' ? 'TASK' : name })
  }
).then((res)=> res.json());

export const fetchAllTasks = async (token: string) => await fetch(
  `${BASE_URL}/tasks`,
  {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  }
).then((res)=> res.json());

export const deleteTask = async (token: string, taskId: string) => await fetch(
  `${BASE_URL}/tasks/${taskId}`,
  {
    method: 'DELETE',
    headers: { authorization: `Bearer ${token}` },
  }
).then((res)=> res.json());

export const postEditTask = async (token: string, task: TaskType) => await fetch(
  `${BASE_URL}/tasks/${task?._id}`,
  {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: task?.name, completed: task?.completed })
  }
).then((res)=> res.json());

