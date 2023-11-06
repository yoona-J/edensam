import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MailboxImg1 from './img/MailboxImg1.png'
import MailboxImg2 from './img/MailboxImg2.png'
import MailboxImg3 from './img/MailboxImg3.png'
import MailboxImg4 from './img/MailboxImg4.png'
import MailboxImg5 from './img/MailboxImg5.png'

function FriendMailboxPage(props) {

  console.log('pppp', props.match.params)

  const [FriendId, setFriendId] = useState('')
  const [FriendResponse, setFriendResponse] = useState([])
  const [FriendName, setFriendName] = useState('')

  useEffect(() => {
    // console.log(props.match.params)
    if (props.match.params !== undefined) {
      setFriendId(props.match.params.FriendId)

      Axios.post('/api/mailbox/friend/getMailbox', { params: props.match.params })
      .then(response => {
        // console.log('response', response.data)
        setFriendResponse(response.data)
        setFriendName(response.data[0].maker.name)
        })
    }
  }, [props.match.params])

  const mailboxCards = FriendResponse.map((mailbox, index) => {

    if (mailbox.mailboxStyle === '1') {
      return <div>
        <a href={`/mailbox/friend/${FriendId}/mailing`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg1} alt='MailboxImg1' style={{ width: '100%', marginTop: '26px', borderRadius: '30px' }}></img>
            <p style={{ position: 'absolute', top: '7%', left: '35%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (mailbox.mailboxStyle === '2') { 
      return <div>
        <a href={`/mailbox/friend/${FriendId}/mailing`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg2} alt='MailboxImg2' style={{ width: '100%', marginTop: '26px', borderRadius: '30px' }}></img>
            <p style={{ position: 'absolute', top: '7%', left: '35%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (mailbox.mailboxStyle === '3') { 
      return <div>
        <a href={`/mailbox/friend/${FriendId}/mailing`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg3} alt='MailboxImg3' style={{ width: '100%', marginTop: '26px', borderRadius: '30px' }}></img>
            <p style={{ position: 'absolute', top: '7%', left: '35%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>  
        </a>
      </div>
    } else if (mailbox.mailboxStyle === '4') { 
      return <div>
        <a href={`/mailbox/friend/${FriendId}/mailing`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg4} alt='MailboxImg4' style={{ width: '100%', marginTop: '26px', borderRadius: '30px' }}></img>
            <p style={{ position: 'absolute', top: '7%', left: '35%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (mailbox.mailboxStyle === '5') { 
      return <div>
        <a href={`/mailbox/friend/${FriendId}/mailing`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg5} alt='MailboxImg5' style={{ width: '100%', marginTop: '26px', borderRadius: '30px' }}></img>
            <p style={{ position: 'absolute', top: '7%', left: '35%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    }
  })

  const IsAvailable = () => {

    const settings = {
      dots: true,
      arrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true
    }

    return <div>
      <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px' }}>
        {FriendName}님의 편지함 목록
      </div>
      <Slider {...settings}>
        {mailboxCards}
      </Slider>
    </div>
  }

  const IsUnavailable = () => {
      return <div style={{ width: '100%', height: '100%', fontSize: '20px', textAlign: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '300px' }}>
        <p style={{ marginBottom: '0px' }}>아직 우체통이 생성되지 않았어요!</p>
        <p>우체통을 생성해달라고 요청해볼까요?</p>
        <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', paddingTop: '7px' }}>요청하기</div>
      </div>
  }

  if (FriendResponse.length === 0) {
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
  } else if (FriendResponse.length >= 1) {
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

export default FriendMailboxPage