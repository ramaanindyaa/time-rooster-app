import '../components/content-tab';
import '../components/user-detail';
import '../components/sign-in-alert';
import 'regenerator-runtime';
import { getCurrentUser } from '../../utils/initialize-firebase';

const MainApp = {
  async render() {
    const user = await getCurrentUser();
    if (user) {
      return /* HTML */`
      <a class="skip-to-content-link" href="#primary">Skip to content</a>

      <main id="primary">
        <div class="main-app-content">
          <content-tab></content-tab>
          <user-detail></user-detail>
        </div>
      </main>
      `;
    }
    return /* HTML */`
    <a class="skip-to-content-link" href="#primary">Skip to content</a>

    <main id="primary">
      <sign-in-alert></sign-in-alert>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default MainApp;
