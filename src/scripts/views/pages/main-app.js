import '../components/content-tab';
import '../components/user-detail';
import '../components/sign-in-alert';
import { getAllTasks } from '../../utils/database-helper';
import { getCurrentUser } from '../../utils/initialize-firebase';

const MainApp = {
  async render() {
    const user = await getCurrentUser();
    if (user) {
      return /* HTML */`
      <div class="main-app-content">
        <content-tab></content-tab>
        <user-detail></user-detail>
      </div>
      `;
    }
    return /* HTML */`
    <sign-in-alert></sign-in-alert>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    getAllTasks();
  },
};

export default MainApp;
