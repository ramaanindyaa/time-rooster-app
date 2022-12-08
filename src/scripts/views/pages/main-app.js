import '../components/content-tab';
import '../components/user-detail';
import '../components/sign-in-alert';
import { getAllTasks } from '../../utils/database-helper';

const MainApp = {
  async render() {
    if (true) {
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
