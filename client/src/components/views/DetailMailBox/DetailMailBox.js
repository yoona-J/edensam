import React from 'react'

import DetailMailBoxImg from './img/DetailMailBox.png'

function DetailMailBox() {
  return (
    <div
      style={{
        width: '90%',
        margin: '3rem auto',
        fontFamily: 'NeoDunggeunmo'
      }}
    >
      <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px' }}>
        편지함 제목
      </div>
        <div style={{ marginTop: '26px', position: 'relative'}}>
          <img src={DetailMailBoxImg} alt='MailBoxImg' style={{ width: '100%'}}></img>
          <p style={{ position: 'absolute', top: '5%', left: '35%', fontSize: '15px'}}>편지가 도착했어요!</p>
        </div>
    </div>
  )
}

export default DetailMailBox