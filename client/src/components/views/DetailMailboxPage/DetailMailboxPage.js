import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import Mailbox1 from './img/Mailbox1.png'
import Mailbox2 from './img/Mailbox2.png'
import Mailbox3 from './img/Mailbox3.png'
import Mailbox4 from './img/Mailbox4.png'
import Mailbox5 from './img/Mailbox5.png'

import MailIcon from './img/MailIcon.png'

function DetailMailboxPage(props) {

  const [UserData, setUserData] = useState([]);
  const [MailboxId, setMailboxId] = useState('')
  const [MailResponse, setMailResponse] = useState([])
  const [MailboxResponse, setMailboxResponse] = useState([])

  useEffect(() => {
    if (props.user.userData !== undefined) {
      console.log(props.user.userData)
      setUserData(props.user.userData)
      setMailboxId(props.match.params.MailboxId)

      Axios.post('/api/mail/getMail', { params: { 'userId': props.user.userData._id, 'mailboxId' : props.match.params.MailboxId }})
        .then(response => {
          console.log(response)
          setMailResponse(response.data)
          if (response.data.length > 0) {
            setMailboxResponse(response.data[0].mailboxId)
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user.userData])

  const IsUnavailable = () => {

    const CopyLink = () => {
      navigator.clipboard.writeText(`http://localhost:3000/mailbox/friend/${UserData._id}`)
      alert('링크가 복사되었어요!')
    }

    return <div style={{ width: '100%', height: '100%', fontSize: '20px', textAlign: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '300px' }}>
      <p style={{ marginBottom: '0px' }}>아직 편지가 존재하지 않아요!</p>
      <p>친구들에게 편지 작성을 요청해보세요!</p>
      <button onClick={CopyLink} style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', paddingTop: '10px', fontSize: '15px', fontFamily: 'NeoDunggeunmo', border: 0 }}>
        <div style={{ width: '100%', height: '40px' }}>
          우체통 공유하기
        </div>
      </button>
    </div> 
  }

  const mailboxDesign = () => { 
      if (MailboxResponse.mailboxStyle === '1') {
        return <div>
          <img src={Mailbox1} alt='Mailbox1' style={{ borderRadius: '20px', width: '100%', marginTop: '24px' }}></img>
        </div>
      } else if (MailboxResponse.mailboxStyle === '2') {
        return <div>
          <img src={Mailbox2} alt='Mailbox2' style={{ borderRadius: '20px', width: '100%', marginTop: '24px' }}></img>
        </div>
      } else if (MailboxResponse.mailboxStyle === '3') {
        return <div>
          <img src={Mailbox3} alt='Mailbox3' style={{ borderRadius: '20px', width: '100%', marginTop: '24px' }}></img>
        </div>
      } else if (MailboxResponse.mailboxStyle === '4') {
        return <div>
          <img src={Mailbox4} alt='Mailbox4' style={{ borderRadius: '20px', width: '100%', marginTop: '24px' }}></img>
        </div>
      } else if (MailboxResponse.mailboxStyle === '5') {
        return <div>
          <img src={Mailbox5} alt='Mailbox5' style={{ borderRadius: '20px', width: '100%', marginTop: '24px' }}></img>
        </div>
      }
    }

  const mailCards = MailResponse.map((mail, index) => {
    console.log(MailResponse)
    return <div>
      <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
        <div key={index}>
          <img src={MailIcon} style={{ width: '105px', marginTop: '26px', marginRight: '24px' }}></img>
        </div>
      </a>
    </div>
  })

  // console.log(MailResponse.length === 0)
  if (MailResponse.length === 0) {
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
    )
  } else {
    return (
        <div
          style={{
              width: '90%',
              margin: '3rem auto',
              fontFamily: 'NeoDunggeunmo'
              }}>
            <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px' }}>
              {MailboxResponse.title}
            </div>
            {/* 우체통 디자인 */}
            {mailboxDesign()}
        
        <div style={{ display: 'inline-flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* 편지 card */}
          {mailCards}
        </div>
      </div>
    )
  }
}

export default DetailMailboxPage