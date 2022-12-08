import { getDatabase, onValue, ref } from 'firebase/database';
import { firebaseApp, getCurrentUser } from './initialize-firebase';

const db = getDatabase(firebaseApp);

const getAllTasks = async () => {
  const user = await getCurrentUser();
  const userTaskRef = ref(db, `user/${user.uid}/tasks`);
  const fourQElement = document.querySelector('four-q');

  onValue(userTaskRef, (snapshot) => {
    const data = snapshot.val();
    fourQElement.tasks = data;
  });
};

export { getAllTasks };
