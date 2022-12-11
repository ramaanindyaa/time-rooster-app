const AboutUs = {
  async render() {
    return `
        <section id="about-box">
          <h1>Time Rooster App</h1>
          <a href="https://github.com/ramaanindyaa/time-rooster-app"><h3>View on GitHub</h3></a>

          <h2>Capstone Team C22-223</h2>
          
          <h3>Kelas Developer Front-End & Back-End</h3>

          <div id="about-profile-box">
            <div class="about-profile">
              <picture class="about-profile-image"><img src="./images/photo/1.jpg" alt="Foto Aditia Parmadi"></picture>
              <div class="about-profile-name">Aditia Parmadi</div>
              <div class="about-profile-links">
                <a href="https://github.com/mr-adit3786">GitHub</a>
              </div>
            </div>

            <div class="about-profile">
              <picture class="about-profile-image"><img src="./images/photo/2.png" alt="Foto Alif Fathir Rachman"></picture>
              <div class="about-profile-name">Alif Fathir Rachman</div>
              <div class="about-profile-links">
                <a href="https://github.com/leafAlif">GitHub</a>
              </div>
            </div>

            <div class="about-profile">
              <picture class="about-profile-image"><img src="./images/photo/1.png" alt="Foto Farchan Wahyu Ananta"></picture>
              <div class="about-profile-name">Farchan Wahyu Ananta</div>
              <div class="about-profile-links">
                <a href="https://github.com/farchan403">GitHub</a>
              </div>
            </div>

            <div class="about-profile">
              <picture class="about-profile-image"><img src="./images/photo/2.jpg" alt="Foto Rama Anindya Vidito Subinarto"></picture>
              <div class="about-profile-name">Rama Anindya Vidito Subinarto</div>
              <div class="about-profile-links">
                <a href="https://github.com/ramaanindyaa">GitHub</a>
              </div>
            </div>
          </div>

        </section>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
