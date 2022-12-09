import { drawCalendar, setCalendarNav } from './draw-calendar';

const CalendarBox = {
  async render() {
    return /* HTML */ `
      <div class="main-app-box">
        <div id="calendar-box">
          ${await drawCalendar()}
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Add Function Here
    await setCalendarNav();
  },
};

export default CalendarBox;
