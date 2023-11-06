import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import Axios from 'axios';

import CalendarPage from './CalendarPage';

import Mailbox1 from './img/Mailbox1.png'
import Mailbox2 from './img/Mailbox2.png'
import Mailbox3 from './img/Mailbox3.png'
import Mailbox4 from './img/Mailbox4.png'
import Mailbox5 from './img/Mailbox5.png'


function MakeMailboxPage(props) {

  const [UserId, setUserId] = useState('')
  const [CalendarForm, setCalendarForm] = useState({})

  useEffect(() => {
    // console.log(props.user.userData)
    if (props.user.userData !== undefined) {
      setUserId(props.user.userData)
    } else {
      console.log('nothing')
    }
  }, [props.user.userData])

  const [IsClicked, setIsClicked] = useState('1')
  const [Title, setTitle] = useState('')

  const ImageHandelClick = (event) => {
    // console.log(event.target.value)
    setIsClicked(event.target.value)
  }

  // console.log(IsClicked)

  const MailboxImg = () => {
    if (IsClicked === '1') {
      return <div>
        <img src={Mailbox1} alt='Mailbox1' style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '2') {
      return <div>
        <img src={Mailbox2} alt='Mailbox2' style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '3') {
      return <div>
        <img src={Mailbox3} alt='Mailbox3' style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '4') {
      return <div>
        <img src={Mailbox4} alt='Mailbox4' style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '5') {
      return <div>
        <img src={Mailbox5} alt='Mailbox5' style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else {
      return <div>
        <img src={Mailbox1} alt='Mailbox1' style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    }
  }

  const TitleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const updateCalendar = (newCalendar) => {
    setCalendarForm(newCalendar)
  }


  // console.log('IsClicked', IsClicked)
  // console.log('Title', Title)
  // console.log('CalendarForm', CalendarForm)

  const submitHandler = (event) => {
    event.preventDefault();

    if (!IsClicked | !Title | !CalendarForm) {
      return alert('모든 내용을 입력해주세요.')
    }

    const body = {
      maker: UserId._id,
      mailboxStyle: IsClicked,
      title: Title,
      calendar: CalendarForm
    }

    console.log('body', body)

    Axios
      .post('/api/mailbox', body)
      .then(response => {
        if (response.status === 200) {
            alert('우체통이 정상적으로 만들어졌습니다.')
            props
                .history
                .push(`/mailbox/${UserId._id}`)
        } else {
            alert('우체통이 만들어지지 않았습니다.')
        }
      })
  }


  return (
    <div
      style={{
        width: '90%',
        margin: '3rem auto',
        fontFamily: 'NeoDunggeunmo'
      }}
    >
      <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px', fontWeight: 'bolder', margin: '0' }}>
        편지함 만들기
      </div>
      <Form onSubmitCapture={submitHandler}>
        {MailboxImg()}
        <div style={{ width: '50%', display: 'inline-flex', justifyContent: 'space-evenly', marginLeft: '25%' }}>
          <Button onClick={ImageHandelClick} value={1} style={{ width: '20px', height: '20px', borderRadius: '100%', backgroundColor: '#C6A8CE', border: '0px' }} />
          <Button onClick={ImageHandelClick} value={2} style={{ width: '20px', height: '20px', borderRadius: '100%', backgroundColor: '#EE8577', border: '0px' }} />
          <Button onClick={ImageHandelClick} value={3} style={{ width: '20px', height: '20px', borderRadius: '100%', backgroundColor: '#8BCDBF', border: '0px' }} />
          <Button onClick={ImageHandelClick} value={4} style={{ width: '20px', height: '20px', borderRadius: '100%', backgroundColor: '#CBE0A2', border: '0px' }} />
          <Button onClick={ImageHandelClick} value={5} style={{ width: '20px', height: '20px', borderRadius: '100%', backgroundColor: '#FAD993', border: '0px' }} />
        </div>
        <p style={{ marginTop: '46px', fontSize: '18px' }}>편지함 제목을 입력하세요</p>
        <Input placeholder='편지함의 제목을 입력하세요' onChange={TitleChangeHandler} value={Title} style={{ width: '100%', height: '39px', backgroundColor: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center' }} />
        <CalendarPage refreshFunction={updateCalendar} />
        <p style={{ textAlign: 'center', fontSize: '15px'}}>종료일 이후에 편지함을 열어보실 수 있습니다.</p>
        <Button
              style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '20px',
                  background: '#B4E8E6',
                  border: '0',
                  marginTop: '67px'
              }}
              htmlType='submit'>
              확인
      </Button>
      </Form>
    </div>
  )
}

export default MakeMailboxPage