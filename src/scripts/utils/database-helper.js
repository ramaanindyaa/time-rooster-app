import {
  getDatabase, onValue, push, ref, set,
} from 'firebase/database';
import { firebaseApp, getCurrentUser } from './initialize-firebase';

const db = getDatabase(firebaseApp);

const _getTasksRef = async () => {
  const user = await getCurrentUser();
  const userTasksRef = ref(db, `user/${user.uid}/tasks/`);
  console.log(userTasksRef);
  return userTasksRef;
};

const _getTaskRef = async (taskId) => {
  const userTasksRef = await _getTasksRef();
  const taskRef = `${userTasksRef}/${taskId}/`;
  return taskRef;
};

const getAllTasks = async () => {
  const userTasksRef = await _getTasksRef();
  const fourQElement = document.querySelector('four-q');

  onValue(userTasksRef, (snapshot) => {
    const data = snapshot.val();
    fourQElement.tasks = data;
  });
};

// TODO: Complete these 2 Function
const pushTask = async (task) => {
  const userTasksRef = await _getTasksRef();
  set(push(userTasksRef, task));
};

const openTask = async (taskId) => {
  const task = await _getTaskRef(taskId);
  console.log(task);
};

// const updateTask = async (taskId) => {
//   const task = await _getTaskRef(taskId);
//   update(taskRef, /* putobjecthere */);
// };

export { getAllTasks, pushTask, openTask };
