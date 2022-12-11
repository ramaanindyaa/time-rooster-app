const Home = {
  async render() {
    return /* HTML */`
    <div class="container">
    <section id="showcase">
      <div class="rows">
        <div class="col">
          <h3 class="sub-heading">Manage Waktu Kamu!</h3>
          <h1 class="heading">Kapanpun dan Dimanapun!</h1>
          <p class="text">Time Rooster adalah aplikasi berbasis Web yang membantu kamu untuk memanage perkerjaan kamu
            menjadi lebih mudah!</p>
          <div class="cta">
            <a href="#/main-app" class="btn" id='btn-test'>Coba Sekarang!</a>
          </div>
        </div>
        <div class="col">
          <img src="./images/1.png" alt="Time Rooster">
        </div>
      </div>
    </section>

    <section class="services section">
      <div class="rows">
        <div class="services-info">
          <h1 class="heading">Manage waktu kamu dengan Mudah dengan menggunakan 4 Kuadran Manajemen Waktu!</h1>
          <p class="text">Dengan menggunakan 4 skala kuadran aktivitas merupakan cara efektif untuk membagi pekerjaan dari terpenting sekaligus mendesak hingga tidak penting dan tidak mendesak.<br> 
          Cara 4 kuadran ini pertama kali dicetuskan oleh Stephen Covey pada tahun 1989 dalam bukunya berjudul 7 Habits of Highly Effective People, Restoring The Character Ethic.</p>
        </div>

        <div class="services-grid">
          <div class="srv-card">
            <div class="card-desc">
              <h3>Fitur Aplikasi kami</h3>
              <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam at placeat
                vero doloribus maiores sint!</p>
            </div>
            <a href="#" class="btn secondary-btn">Jejalahi lebih lanjut</a>
          </div>

          <div class="srv-card">
            <div class="card-desc">
              <h3>Management Waktu</h3>
              <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam at placeat
                vero doloribus maiores sint!</p>
            </div>
            <a href="#" class="btn secondary-btn">Jejalahi lebih lanjut</a>
          </div>
          
          <div class="srv-card">
            <div class="card-desc">
              <h3>Kuadran Waktu</h3>
              <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam at placeat
                vero doloribus maiores sint!</p>
            </div>
            <a href="#" class="btn secondary-btn">Jejalahi lebih lanjut</a>
          </div>
        </div>
      </div>
    </section>
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
