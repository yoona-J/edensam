import React, { useState } from 'react'

function CalendarPage(props) {
    
    const Today = new Date();
    
    const [CalendarForm, setCalendarForm] = useState({
        year: Today.getFullYear(),
        month: Today.getMonth() + 1,
        day: Today.getDate()
    });

    const yearOnChange = (event) => {
        // console.log('event.target.value', typeof parseInt(event.target.value))
        let y = parseInt(event.target.value)
        setCalendarForm({ ...CalendarForm, year: y })
        props.refreshFunction({ ...CalendarForm, year: event.target.value })
    }

    const monthOnChange = (event) => {
        let m = parseInt(event.target.value)
        setCalendarForm({ ...CalendarForm, month: m })
        props.refreshFunction({ ...CalendarForm, month: event.target.value })
    }

    const dayOnChange = (event) => {
        let d = parseInt(event.target.value)
        setCalendarForm({ ...CalendarForm, day: d })
        props.refreshFunction({ ...CalendarForm, day: event.target.value })
    }


    // for (let d = 1; d <= 365; d++) {
    //     Year.push(Today.getFullYear())
    //     Month.push(Today.getFullYear())
    //     Day.push(Today.getFullYear()+d)
    // }

    // console.log(Year, Month, Day)


    let Year = [];
    for (let y = Today.getFullYear(); y <= Today.getFullYear() + 1; y++) {
        Year.push(y);
    }
    
    // console.log('Today.getFullYear() + 1', CalendarForm.year === Today.getFullYear()+1)

    let Month = [];
    //date 객체에서 month는 0~11로 나타나므로 +1
    if (CalendarForm.year === Today.getFullYear()) {
        for (let m = Today.getMonth()+1; m <= 12; m++) {
            if (m < 10) {
                // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
                Month.push("0" + m);
            } else {
                Month.push(m);
            }
        }
    } else if (CalendarForm.year === Today.getFullYear() + 1) {
        // console.log(Today.getMonth()+1)
        for (let m = 1; m <= Today.getMonth()+1; m += 1) {
            if (m < 10) {
                // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
                Month.push("0" + m);
            } else {
                Month.push(m);
            }
        }
    }
    
    let Day = [];
    let date = new Date(CalendarForm.year, CalendarForm.month, 0).getDate();
    //date 객체에서 date는 0~30 또는 0~29로 나타나므로 +1
    if (CalendarForm.year === Today.getFullYear() && CalendarForm.month === Today.getMonth() + 1) {
        for (let d = Today.getDate(); d <= date; d += 1) {
            if (d < 10) {
                // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
                Day.push("0" + d);
            } else {
                Day.push(d);
            }
        }
    } else if (CalendarForm.year === Today.getFullYear() + 1 && CalendarForm.month < Today.getMonth() + 1) {
        for (let d = 1; d <= date; d += 1) {
            if (d < 10) {
                // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
                Day.push("0" + d);
            } else {
                Day.push(d);
            }
        }
    }
    else if (CalendarForm.year === Today.getFullYear() + 1 && CalendarForm.month === Today.getMonth() + 1) {
        // console.log(CalendarForm.year === Today.getFullYear() + 1, CalendarForm.month <= Today.getMonth() + 1)
        // console.log(CalendarForm.month)
        // console.log(Today.getMonth() + 1)
        for (let d = 1; d <= Today.getDate(); d += 1) {
            if (d < 10) {
                // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
                Day.push("0" + d);
            } else {
                Day.push(d);
            }
        }
    }

  return (
      <div>
          <p style={{ fontSize: '18px' }}>편지 받는 종료일을 선택하세요</p>
          <div style={{ width: '100%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center', marginBottom: '16px' }}>
                <select value={CalendarForm.year} onChange={yearOnChange} style={{ width: '30%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center' }}>
                    {Year.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
          </div>

          <div style={{ width: '100%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center', marginBottom: '16px' }}>
                <select value={CalendarForm.month} onChange={monthOnChange} style={{ width: '30%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center' }}>
                    {Month.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
          </div>

          <div style={{ width: '100%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center', marginBottom: '16px' }}>
                <select value={CalendarForm.day} onChange={dayOnChange} style={{ width: '30%', height: '39px', background: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center' }}>
                    {Day.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
          </div>
    </div>
  )
}

export default CalendarPage