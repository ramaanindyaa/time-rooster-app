function setCalendarNav(date = null){
  date = date ? new Date(date) : new Date();
  document.querySelector('.calendar-nav button.prev').addEventListener('click', () => drawCalendar(date.setMonth(date.getMonth()-1), '#calendar-box'));
  document.querySelector('.calendar-nav button.next').addEventListener('click', () => drawCalendar(date.setMonth(date.getMonth()+1), '#calendar-box'));
}

function drawCalendar(date = null, element = null){
  date = date ? new Date(date) : new Date();
  const year = date.getFullYear();
  const arrayDayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const monthName = date.toLocaleString('id-ID', { month: 'long' });
  const monthNumber = new Date(year, date.getMonth()+1, 0).getDate();
  const startDay = new Date(year, date.getMonth(), 1).toLocaleDateString('id-ID', { weekday: 'long' });
  const startWeek = arrayDayName.indexOf(startDay);

  let output = `
    <div class="calendar-nav">
      <button class="prev">&lt;</button>
      <h2 class="calendar-header">${monthName} ${year}</h2>
      <button class="next">&gt;</button>
    </div>`;

  output += `<div class="calendar-month">`;

  for (var i = 0; i < arrayDayName.length; i++) {
    output += `<span class="week-name">${arrayDayName[i].substring(0,3)}</span>`;
  }
  
  for (var i = 0; i < startWeek; i++) {
      output +=  `<span class="day-item-disabled"></span>`;
  }

  for (var i = 1; i <= monthNumber; i++) {
    output +=  `<span class="day-item">${i}</span>`;
  }

  output += `</div>`;

  if(element){
    document.querySelector(element).innerHTML = output;
    setCalendarNav(date);
    return;
  } else {
    return output;
  }
}


const MainApp = {

  async render() {
    return `
      <style>
      /* TODO: pindah ke file css */
      .main-app-box{
        background-color: var(--bg-color-2);
        padding: 1rem;
        border-radius: 20px;
        width: 100%;
        position: relative;
        text-align: center;
      }
      
      .calendar-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
      }

      .calendar-nav button {
        background:none;
        border:none;
        font-size:1.4rem;
        padding:1rem;
        cursor:pointer
      }

      .calendar-month {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: .75rem;
        justify-items: center;
      }
      
      .calendar-month .day-item {
        background-color: #ccc;
        border-radius: 100%;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
      }
      </style>

      
      <div class="main-app-box">
        <h2>Main App Page</h2>
        <div id="calendar-box">
          ${drawCalendar()}
          ${drawCalendar('2010-01')}
        </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    setCalendarNav();
  },
};

export default MainApp;
