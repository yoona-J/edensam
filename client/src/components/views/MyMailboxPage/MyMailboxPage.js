import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MailboxImg1 from './img/MailboxImg1.png'
import MailboxImg2 from './img/MailboxImg2.png'
import MailboxImg3 from './img/MailboxImg3.png'
import MailboxImg4 from './img/MailboxImg4.png'
import MailboxImg5 from './img/MailboxImg5.png'

import DeleteIcon from './img/DeleteIcon.png'

function MyMailboxPage(props) {

  const [UserId, setUserId] = useState('')
  const [Res, setRes] = useState([])

  useEffect(() => {
    console.log(props.user.userData)
    if (props.user.userData !== undefined) {
      setUserId(props.user.userData)

      Axios.post('/api/mailbox/getMailbox',
        { params: { 'userId': props.user.userData } })
      .then(response => {
        console.log('response', response.data)
        setRes(response.data)
      })
    }
  }, [props.user.userData])

  const mailboxCards = Res.map((mailbox, index) => {

    var y = mailbox.calendar[0].year
    var m = mailbox.calendar[0].month
    var d = mailbox.calendar[0].day

    const date = y + '-' + m + '-' + d
    const day = new Date
    const today = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`

    if (date === today && mailbox.mailboxStyle === '1' || date <= today && mailbox.mailboxStyle === '1') {
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href={`/mailbox/${UserId._id}/detail/${mailbox._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg1} alt='MailboxImg1' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (date === today && mailbox.mailboxStyle === '2' || date <= today && mailbox.mailboxStyle === '2') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href={`/mailbox/${UserId._id}/detail/${mailbox._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg2} alt='MailboxImg2' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (date === today && mailbox.mailboxStyle === '3' || date <= today && mailbox.mailboxStyle === '3') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href={`/mailbox/${UserId._id}/detail/${mailbox._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg3} alt='MailboxImg3' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>  
        </a>
      </div>
    } else if (date === today && mailbox.mailboxStyle === '4' || date <= today && mailbox.mailboxStyle === '4') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href={`/mailbox/${UserId._id}/detail/${mailbox._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg4} alt='MailboxImg4' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (date === today && mailbox.mailboxStyle === '5' || date <= today && mailbox.mailboxStyle === '5') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href={`/mailbox/${UserId._id}/detail/${mailbox._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg5} alt='MailboxImg5' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    }
    else if (date !== today && mailbox.mailboxStyle === '1') {
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href='#' onClick={function () { alert('아직 열어볼 수 없어요!') }} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }} >
            <img src={MailboxImg1} alt='MailboxImg1' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (date !== today && mailbox.mailboxStyle === '2') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href='#' onClick={function () { alert('아직 열어볼 수 없어요!') }} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg2} alt='MailboxImg2' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (date !== today && mailbox.mailboxStyle === '3') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href='#' onClick={function () { alert('아직 열어볼 수 없어요!') }} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg3} alt='MailboxImg3' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>  
        </a>
      </div>
    } else if (date !== today && mailbox.mailboxStyle === '4') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href='#' onClick={function () { alert('아직 열어볼 수 없어요!') }} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg4} alt='MailboxImg4' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    } else if (date !== today && mailbox.mailboxStyle === '5') { 
      return <div>
        <a href={`/mailbox/${UserId._id}/${mailbox._id}/delete`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={DeleteIcon} style={{ width: '25px', marginTop: '8px'}} />
          </div>
        </a>
        <a href='#' onClick={function () { alert('아직 열어볼 수 없어요!') }} style={{ textDecorationLine: 'none', color: '#000' }}>
          <div key={index} style={{ position: 'relative' }}>
            <img src={MailboxImg5} alt='MailboxImg5' style={{ width: '100%', marginTop: '10px', borderRadius: '30px' }}></img>
            <p style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '7%', fontSize: '20px' }}>{ mailbox.title }</p>
            <p style={{ position: 'absolute', top: '20%', left: '33%', fontSize: '15px' }}>OPEN: { mailbox.calendar[0].year }.{ mailbox.calendar[0].month }.{ mailbox.calendar[0].day }</p>
          </div>
        </a>
      </div>
    }
  });

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
        {UserId.name}님의 편지함 목록
     </div>
      <Slider {...settings}>
        {mailboxCards}
      </Slider>
      <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly' }}>
        <button onClick={CopyLink} style={{ width: '30%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', marginTop: '76px', fontSize: '15px', fontFamily: 'NeoDunggeunmo', border: 0 }}>
          <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>공유</p>
        </button>
        <a href={`/mailbox/${UserId._id}/create`} style={{ textDecorationLine: 'none', color: '#000',  width: '30%' }}>
          <div style={{ width: '100%', height: '40px', backgroundColor: '#FAD993', borderRadius: '60px', paddingTop: '7px', marginTop: '76px' }}>
            <p style={{ margin: '0', fontSize: '20px', textAlign: 'center' }}>생성</p>
          </div>
        </a>
      </div>
    </div>
  };

  const CopyLink = () => {
      navigator.clipboard.writeText(`http://localhost:3000/mailbox/friend/${UserId._id}`)
      alert('링크가 복사되었어요!')
  }

  const IsUnavailable = () => {
    return <div style={{ width: '100%', height: '100%', fontSize: '20px', textAlign: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '300px' }}>
      <p style={{ marginBottom: '0px' }}>아직 우체통이 존재하지 않아요!</p>
      <p>우체통을 생성해주세요!</p>
      <a href={`/mailbox/${UserId._id}/create`} style={{ textDecorationLine: 'none', color: '#000' }}>
        <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', paddingTop: '7px' }}>
          생성하기
        </div>
      </a>
    </div> 
  }

  if (Res.length === 0) {
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
  } else if (Res.length >= 1) {
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