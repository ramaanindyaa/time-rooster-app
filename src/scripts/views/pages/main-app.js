import '../components/content-tab';
import '../components/user-detail';

const MainApp = {

  async render() {
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
