function formatDateYearMonth(date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}

// eslint-disable-next-line consistent-return
function drawCalendar(strDate = null, element = null) {
  const date = strDate ? new Date(strDate) : new Date();
  const year = date.getFullYear();
  const arrayDayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const monthName = date.toLocaleString('id-ID', { month: 'long' });
  const monthNumber = new Date(year, date.getMonth() + 1, 0).getDate();
  const startDay = new Date(year, date.getMonth(), 1).toLocaleDateString('id-ID', { weekday: 'long' });
  const startWeek = arrayDayName.indexOf(startDay);

  let output = `
    <div class="calendar-nav">
      <button class="prev">&lt;</button>
      <h2 class="calendar-header" data-text="${monthName} ${year}"><span>${monthName} ${year}</span></h2>
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
    output += `<span class="day-item" data-date="${formatDateYearMonth(date)}-${i}">${i}</span>`;
  }

  output += '</div>';

  if (element) {
    document.querySelector(element).innerHTML = output;
    // eslint-disable-next-line no-use-before-define
    setCalendarNav(date);
  } else {
    return output;
  }
}

function setCalendarNav(strDate = null) {
  const date = strDate ? new Date(strDate) : new Date();
  const header = document.querySelector('.calendar-header');

  document.querySelector('.calendar-nav button.prev').addEventListener('click', () => drawCalendar(date.setMonth(date.getMonth() - 1), '#calendar-box'));
  document.querySelector('.calendar-nav button.next').addEventListener('click', () => drawCalendar(date.setMonth(date.getMonth() + 1), '#calendar-box'));

  header.querySelector('span').addEventListener('click', () => {
    header.innerHTML = `<input type="month" id="set-month" pattern="[0-9]{4}-[0-9]{2}" value="${formatDateYearMonth(date)}">`;

    const setMonth = document.querySelector('#set-month');
    setMonth.focus();

    setMonth.addEventListener('blur', () => {
      const setDate = new Date(setMonth.value);
      drawCalendar(formatDateYearMonth(setDate), '#calendar-box');
    });
  });

  document.querySelectorAll('.day-item').forEach((item) => {
    item.addEventListener('click', () => {
      alert(item.dataset.date);
    });
  });
}

export { drawCalendar, setCalendarNav };
