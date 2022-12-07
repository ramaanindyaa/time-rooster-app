import '../components/content-tab';
import '../components/user-detail';
import '../components/sign-in-alert';
import { getUserState } from '../../utils/sign-in-helper';

const MainApp = {
  async render() {
    const renderElement = await this.stateWatcher();
    return renderElement;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },

  async stateWatcher() {
    console.log(getUserState());
    if (getUserState()) {
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
};

export default MainApp;
