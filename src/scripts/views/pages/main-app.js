import '../components/content-tab';
import '../components/user-detail';
import '../components/sign-in-alert';

const user = 1;
const MainApp = {
  async render() {
    if (user === false) {
      return /* HTML */`
      <sign-in-alert></sign-in-alert>
      `;
    }
    return /* HTML */`
      <div class="main-app-content">
        <content-tab></content-tab>
        <user-detail></user-detail>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default MainApp;
