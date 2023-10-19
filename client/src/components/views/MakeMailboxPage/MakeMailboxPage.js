import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';

import Mailbox1 from './img/Mailbox1.png'
import Mailbox2 from './img/Mailbox2.png'
import Mailbox3 from './img/Mailbox3.png'
import Mailbox4 from './img/Mailbox4.png'
import Mailbox5 from './img/Mailbox5.png'

function MakeMailboxPage() {

  const [IsClicked, setIsClicked] = useState('')

  const ImageHandelClick = (event) => {
    // console.log(event.target.value)
    setIsClicked(event.target.value)
  }

  // console.log(IsClicked)

  const MailboxImg = () => {
    if (IsClicked === '1') {
      return <div>
        <img src={Mailbox1} style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '2') {
      return <div>
        <img src={Mailbox2} style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '3') {
      return <div>
        <img src={Mailbox3} style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '4') {
      return <div>
        <img src={Mailbox4} style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else if (IsClicked === '5') {
      return <div>
        <img src={Mailbox5} style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    } else {
      return <div>
        <img src={Mailbox1} style={{ width: '100%', marginTop: '22px', marginBottom: '29px' }} />
      </div>
    }
  }

  const submitHandler = () => {

  }


  return (
    <div
      style={{
        width: '90%',
        margin: '3rem auto',
        fontFamily: 'NeoDunggeunmo'
      }}
    >
      <div style={{ width: '100%', height: '40px', backgroundColor: '#A3D6CC', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px', fontWeight: 'bolder' }}>
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
        <Input placeholder='편지함의 제목을 입력하세요' style={{ width: '100%', height: '39px', backgroundColor: '#F9DB99', borderRadius: '20px', border: '0', textAlign: 'center', marginTop: '56px' }} />
      </Form>
    </div>
  )
}

export default MakeMailboxPage