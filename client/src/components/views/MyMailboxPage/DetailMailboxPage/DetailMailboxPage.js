import React from 'react'

import Mailbox1 from './img/Mailbox1.png'

import MailIcon from './img/MailIcon.png'

function DetailMailboxPage() {
  return (
      <div
        style={{
            width: '90%',
            margin: '3rem auto',
            fontFamily: 'NeoDunggeunmo'
            }}>
          <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px' }}>
              편지함 제목
          </div>
      <img src={Mailbox1} style={{ borderRadius: '20px', width: '100%', marginTop: '24px' }}></img>
      
      <div>
            <img src={MailIcon} style={{ width: '105px', marginTop: '26px' }}></img>
            <img src={MailIcon} style={{ width: '105px', marginTop: '26px' }}></img>
            <img src={MailIcon} style={{ width: '105px', marginTop: '26px' }}></img>
            <img src={MailIcon} style={{ width: '105px', marginTop: '26px' }}></img>
      </div>
        
    </div>
  )
}

export default DetailMailboxPage