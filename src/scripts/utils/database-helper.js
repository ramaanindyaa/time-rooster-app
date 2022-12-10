import {
  getDatabase, onValue, push, ref, remove, set,
} from 'firebase/database';
import { firebaseApp, getCurrentUser } from './initialize-firebase';

const db = getDatabase(firebaseApp);

const _getUserId = async () => {
  const user = await getCurrentUser();
  return user.uid;
};

const _getTasksRef = async () => {
  const user = await getCurrentUser();
  const userTasksRef = ref(db, `user/${user.uid}/tasks/`);
  return userTasksRef;
};

const getAllTasks = async () => {
  const userTasksRef = await _getTasksRef();
  const fourQElement = document.querySelector('four-q');

  onValue(userTasksRef, (snapshot) => {
    const data = snapshot.val();
    fourQElement.tasks = data;
  });
};

const pushTask = async (task) => {
  const userId = await _getUserId();
  try {
    set(push(ref(db, `/user/${userId}/tasks/`), task));
  } catch (error) {
    console.log(error);
  }
};

const setTask = async (taskId, task) => {
  const userId = await _getUserId();
  try {
    set(ref(db, `/user/${userId}/tasks/${taskId}`), task);
  } catch (error) {
    console.log(error);
  }
};

const removeTask = async (taskId) => {
  const userId = await _getUserId();
  try {
    remove(ref(db, `/user/${userId}/tasks/${taskId}`));
  } catch (error) {
    console.log(error);
  }
};

// const updateTask = async (taskId) => {
//   const task = await _getTaskRef(taskId);
//   update(taskRef, /* putobjecthere */);
// };

export {
  getAllTasks,
  pushTask,
  setTask,
  removeTask,
};
