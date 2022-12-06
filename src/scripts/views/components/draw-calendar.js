function drawCalendar(date = null, element = null) {
  date = date ? new Date(date) : new Date();
  const year = date.getFullYear();
  const arrayDayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const monthName = date.toLocaleString('id-ID', { month: 'long' });
  const monthNumber = new Date(year, date.getMonth() + 1, 0).getDate();
  const startDay = new Date(year, date.getMonth(), 1).toLocaleDateString('id-ID', { weekday: 'long' });
  const startWeek = arrayDayName.indexOf(startDay);

  let output = `
    <div class="calendar-nav">
      <button class="prev">&lt;</button>
      <h2 class="calendar-header">${monthName} ${year}</h2>
      <button class="next">&gt;</button>
    </div>`;

  output += '<div class="calendar-month">';

  for (let i = 0; i < arrayDayName.length; i += 1) {
    output += `<span class="week-name">${arrayDayName[i].substring(0, 3)}</span>`;
  }

  for (let i = 0; i < startWeek; i += 1) {
    output += '<span class="day-item-disabled"></span>';
  }

  for (let i = 1; i <= monthNumber; i += 1) {
    output += `<span class="day-item">${i}</span>`;
  }

  output += '</div>';

  if (element) {
    document.querySelector(element).innerHTML = output;
    setCalendarNav(date);
  } else {
    return output;
  }
}

export default drawCalendar;
