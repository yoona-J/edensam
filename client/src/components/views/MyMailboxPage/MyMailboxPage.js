import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import MailboxImg1 from './img/MailboxImg1.png'
import MailboxImg2 from './img/MailboxImg2.png'
import MailboxImg3 from './img/MailboxImg3.png'
import MailboxImg4 from './img/MailboxImg4.png'
import MailboxImg5 from './img/MailboxImg5.png'

function MyMailboxPage(props) {

  const [UserId, setUserId] = useState('')
  const [Res, setRes] = useState([])

  useEffect(() => {
    console.log(props.user.userData)
    if (props.user.userData !== undefined) {
      setUserId(props.user.userData)

      Axios.post('/api/mailbox/getMailbox', { params: { 'userId': props.user.userData }})
      .then(response => {
        console.log('response', response.data)
        setRes(response)
        })
    }
  }, [props.user.userData])

  const IsAvailable = () => {
    return <div>
      <div style={{ width: '100%', height: '40px', backgroundColor: '#A3D6CC', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px' }}>
        {UserId.name}님의 편지함 목록
      </div>
          <div style={{ position: 'relative' }}>
            <img src={MailboxImg1} alt='MailboxImg1' style={{ width: '100%', marginTop: '26px' }}></img>
            <p style={{ position: 'absolute', top: '12%', left: '35%', fontSize: '20px' }}>편지함 제목</p>
            <p style={{ position: 'absolute', top: '23%', left: '33%', fontSize: '15px' }}>OPEN: 2023.10.24</p>
          </div>
      <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly' }}>
        <a href={`/mailbox/${UserId._id}/delete`} style={{ textDecorationLine: 'none', color: '#000',  width: '30%' }}>
          <div style={{ width: '100%', height: '40px', backgroundColor: '#A3D6CC', borderRadius: '60px', paddingTop: '7px', marginTop: '76px' }}>
            <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>삭제</p>
          </div>
        </a>
        <a href={`/mailbox/${UserId._id}/create`} style={{ textDecorationLine: 'none', color: '#000',  width: '30%' }}>
          <div style={{ width: '100%', height: '40px', backgroundColor: '#FAD993', borderRadius: '60px', paddingTop: '7px', marginTop: '76px' }}>
            <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>생성</p>
          </div>
        </a>
      </div>
    </div>
  }

  const IsUnavailable = () => {
    return <div style={{ width: '100%', height: '100%', fontSize: '20px', textAlign: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '300px' }}>
      <p style={{ marginBottom: '0px' }}>아직 우체통이 존재하지 않아요!</p>
      <p>우체통을 생성해주세요!</p>
      <a href={`/mailbox/${UserId._id}/create`} style={{ textDecorationLine: 'none', color: '#000' }}>
        <div style={{ width: '100%', height: '40px', backgroundColor: '#A3D6CC', borderRadius: '60px', paddingTop: '7px' }}>
          생성하기
        </div>
      </a>
    </div> 
  }

  if (Res.status === 200 && Res.data.length === 0) {
    return (
      <div
        style={{
          width: '90%',
          margin: '3rem auto',
          fontFamily: 'NeoDunggeunmo'
        }}
      >
        {/* 우체통 card */}
        <IsUnavailable />
      </div>
    );
  } else if (Res.status === 200 && Res.data.length >= 1) {
    return (
      <div
        style={{
          width: '90%',
          margin: '3rem auto',
          fontFamily: 'NeoDunggeunmo'
        }}
      >
        {/* 우체통 card */}
        <IsAvailable />
      </div>
    );
  }

  return (
      <div />
    );
}

export default MyMailboxPage