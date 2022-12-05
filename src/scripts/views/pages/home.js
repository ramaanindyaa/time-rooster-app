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
            <a href="#" class="btn" id='btn-test'>Daftar Sekarang!</a>
            <a href="#" class="btn secondary-btn">Login</a>
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
          <h3 class="sub-heading">Fitur Yang Kami Tawarkan!</h3>
          <h1 class="heading">Manage waktu kamu dengan Mudah dan terstruktur!</h1>
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus
            quisquam eaque dolorem soluta dolorum ipsam nemo quaerat ratione. Ad.</p>
          <div class="cta">
            <a href="#" class="btn">Daftar Sekarang!</a>
            <a href="#" class="btn secondary-btn">Login</a>
          </div>
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
              <h3>Kalender Produktivitas</h3>
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
    const btnTest = document.getElementById('btn-test');
    btnTest.addEventListener('click', (e) => {
      e.stopPropagation();
      alert('Button Pressed');
    });
  },
};

export default Home;
