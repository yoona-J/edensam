import React, { useState } from 'react'

function CalendarPage(props) {
    
    const Today = new Date();

    const [CalendarForm, setCalendarForm] = useState({
        year: Today.getFullYear(),
        month: '',
        day: ''
    });

    const yearOnChange = (event) => {
        setCalendarForm({ ...CalendarForm, year: event.target.value })
        props.refreshFunction({ ...CalendarForm, year: event.target.value })
    }

    const monthOnChange = (event) => {
        setCalendarForm({ ...CalendarForm, month: event.target.value })
        props.refreshFunction({ ...CalendarForm, month: event.target.value })
    }

    const dayOnChange = (event) => {
        setCalendarForm({ ...CalendarForm, day: event.target.value })
        props.refreshFunction({ ...CalendarForm, day: event.target.value })
    }

    let Year = [];
    for (let y = Today.getFullYear(); y <= 2100; y += 1) {
        Year.push(y);
    }
    
    let Month = [];
    //date 객체에서 month는 0~11로 나타나므로 +1
    for (let m = 1; m <= 12; m += 1) {
        if (m < 10) {
            // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
            Month.push("0" + m.toString());
        } else {
            Month.push(m.toString());
        }
    }

    let Day = [];
    let date = new Date(CalendarForm.year, CalendarForm.month, 0).getDate();
    //date 객체에서 date는 0~30 또는 0~29로 나타나므로 +1
    for (let d = 1; d <= date; d += 1) {
        if (d < 10) {
        // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
        Day.push("0" + d.toString());
        } else {
        Day.push(d.toString());
        }
    }

  return (
      <div>
          <p style={{ fontSize: '18px' }}>편지 받는 종료일을 선택하세요</p>
          <select value={CalendarForm.year} onChange={yearOnChange} style={{ width: '100%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center' }}>
              {Year.map(item => (
                <option value={item} key={item} style={{weight: '50px'}}>
                    {item}
                </option>
              ))}
          </select>

          <select value={CalendarForm.month} onChange={monthOnChange} style={{ width: '100%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center', marginTop: '10px' }}>
              {Month.map(item => (
                <option value={item} key={item}>
                    {item}
                </option>
              ))}
          </select>

          <select value={CalendarForm.day} onChange={dayOnChange} style={{ width: '100%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center', marginTop: '10px' }}>
              {Day.map(item => (
                <option value={item} key={item}>
                    {item}
                </option>
              ))}
          </select>
          
    </div>
  )
}

export default CalendarPage