import drawCalendar from './draw-calendar';

const Calendar = {
  async render() {
    return /* HTML */ `
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
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Add Function Here
  },
};

export default Calendar;
