import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import GiftPrologueImg from './img/GiftPrologueImg.png'
import Axios from 'axios';

function GiftProloguePage(props) {

    console.log(props)
    
    const history = useHistory();

    const [FriendId, setFriendId] = useState('')
    const [FriendMailboxId, setFriendMailboxId] = useState('')
    const [EnvelopeImg, setEnvelopeImg] = useState('')
    const [StickerIcon, setStickerIcon] = useState('')
    const [Writer, setWriter] = useState('')
    const [content, setcontent] = useState('')

    useEffect(() => {
        if (props) {
            setFriendId(props.location.state.friendId)
            setFriendMailboxId(props.match.params.MailboxId)
            setEnvelopeImg(props.location.state.envelopeImg)
            setStickerIcon(props.location.state.stickerIcon)
            setWriter(props.location.state.mailing.writer)
            setcontent(props.location.state.mailing.content)
      }
    }, [props])

    const getGiftHandler = (event) => {
        event.preventDefault();
        history.push({ pathname: `/wish/friend/${FriendId}`, state: { friendId: FriendId, mailboxId: FriendMailboxId, envelopeImg: EnvelopeImg, stickerIcon: StickerIcon, writer: Writer, content: content }})
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const body = {
            writer: Writer,
            content: content,
            friendId: FriendId,
            mailboxId: FriendMailboxId,
            envelopeImg: EnvelopeImg,
            stickerIcon: StickerIcon,
            giftAvailable: false
        }

        console.log(body)

        Axios
            .post('/api/mail', body)
            .then(response => {
                if (response.status === 200) {
                    // alert('편지가 정상적으로 저장되었습니다.')
                    props
                        .history
                        .push('/mailing/success')
                } else {
                    alert('편지가 저장되지 않았습니다.')
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
            <img src={GiftPrologueImg} alt='GiftPrologueImg' style={{ width: '100%', borderRadius: '30px' }} />
            <p style={{ fontSize: '25px', textAlign: 'center', marginBottom: '0', marginTop: '50px' }}>선물을 함께</p>
            <p style={{ fontSize: '25px', textAlign: 'center', margin: '0' }}>보내시겠습니까?</p>
            <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly' }}>
                <button onClick={submitHandler} style={{ width: '100px', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', paddingTop: '7px', marginTop: '76px', border: 0 }}>
                    <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>No</p>
                </button>
                <button onClick={getGiftHandler} style={{ width: '100px', height: '40px', backgroundColor: '#FAD993', borderRadius: '60px', paddingTop: '7px', marginTop: '76px', border: 0 }}>
                    <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>Yes</p>
                </button>
            </div>
        </div>
    )
}

export default GiftProloguePage