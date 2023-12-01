import React, { useState, useEffect } from 'react'
import Axios from 'axios';

// sticker icon
import StickerIcon1 from "./icon/StickerIcon1.png";
import StickerIcon2 from "./icon/StickerIcon2.png";
import StickerIcon3 from "./icon/StickerIcon3.png";
import StickerIcon4 from "./icon/StickerIcon4.png";
import StickerIcon5 from "./icon/StickerIcon5.png";
import StickerIcon6 from "./icon/StickerIcon6.png";
import StickerIcon7 from "./icon/StickerIcon7.png";
import StickerIcon8 from "./icon/StickerIcon8.png";
import StickerIcon9 from "./icon/StickerIcon9.png";
import StickerIcon10 from "./icon/StickerIcon10.png";
import StickerIcon11 from "./icon/StickerIcon11.png";
import StickerIcon12 from "./icon/StickerIcon12.png";

//Envelope image
import EnvelopeImg1 from "./img/EnvelopeImg1.png";
import EnvelopeImg2 from "./img/EnvelopeImg2.png";
import EnvelopeImg3 from "./img/EnvelopeImg3.png";
import EnvelopeImg4 from "./img/EnvelopeImg4.png";
import EnvelopeImg5 from "./img/EnvelopeImg5.png";

//giftbox Icon
import GiftboxIcon from './icon/GiftboxIcon.png';

function EnvelopeDesign(props) {

    const [MailResponse, setMailResponse] = useState([])
    const [MailboxId, setMailboxId] = useState('')
    const [UserData, setUserData] = useState([])

    useEffect(() => {
        console.log(props)
        
        if (props) {
            setMailResponse(props.MailResponse)
            setMailboxId(props.MailboxId)
            setUserData(props.UserData)
        }
    }, [props])
    

    const mailCards = MailResponse.map((mail, index) => {
        console.log('MailResponse', mail)

        //gift가 없는 경우
        if (mail.giftAvailable === 'false') {
            //편지봉투 === '1'
            if (mail.envelopeImg === '1' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '6') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '7') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '8') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '9') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '10') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '11') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '12') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            }

            //편지봉투 === '2'
            if (mail.envelopeImg === '2' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '6') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '7') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '8') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '9') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '10') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '11') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '12') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            }
            //편지봉투 === '3'
            if (mail.envelopeImg === '3' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '6') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '7') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '8') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '9') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '10') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '11') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '12') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            }
            //편지봉투 === '4'
            if (mail.envelopeImg === '4' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '6') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '7') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '8') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '9') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '10') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '11') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '12') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            }
            //편지봉투 === '5'
            if (mail.envelopeImg === '5' && mail.stickerIcon === '1') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '2') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '3') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '4') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '6') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '7') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '8') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '9') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '10') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '11') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '12') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            }
        }
        else if (mail.giftAvailable != 'false') {
            //편지봉투 === '1'
            if (mail.envelopeImg === '1' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '6') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '7') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '8') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '9') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '10') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '11') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '1' && mail.stickerIcon === '12') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg1} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            }

            //편지봉투 === '2'
            if (mail.envelopeImg === '2' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '6') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '7') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '8') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '9') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '10') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '11') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '2' && mail.stickerIcon === '12') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg2} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            }
            //편지봉투 === '3'
            if (mail.envelopeImg === '3' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '6') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '7') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '8') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '9') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '10') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '11') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '3' && mail.stickerIcon === '12') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg3} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            }
            //편지봉투 === '4'
            if (mail.envelopeImg === '4' && mail.stickerIcon === '1') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '2') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '3') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '4') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '6') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '7') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '8') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '9') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '10') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '11') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '4' && mail.stickerIcon === '12') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            }
            //편지봉투 === '5'
            if (mail.envelopeImg === '5' && mail.stickerIcon === '1') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon1} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '2') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon2} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '3') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon3} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '4') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                        <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                        </img>
                        <img src={StickerIcon4} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '5') {
                return <div>
                <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                    <div key={index} style={{ position: 'relative' }}>
                    <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}>
                    </img>
                    <img src={StickerIcon5} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                    </div>
                </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '6') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon6} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '7') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon7} style={{ width: '38px', height: '28px', position: 'absolute', top: '40%', left: '30%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '8') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon8} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '9') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon9} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '10') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon10} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '11') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg5} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon11} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            } else if (mail.envelopeImg === '5' && mail.stickerIcon === '12') {
                return <div>
                    <a href={`/mailbox/${UserData._id}/detail/${MailboxId}/mail/${mail._id}`}>
                        <div key={index} style={{ position: 'relative' }}>
                            <img src={EnvelopeImg4} style={{ width: '105px', marginTop: '26px' }}></img>
                            <img src={StickerIcon12} style={{ width: '50px', position: 'absolute', top: '30%', left: '25%' }} />
                        </div>
                    </a>
                </div>
            }
        }
    })
    
    return (
        <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {mailCards}
        </div>
    )
}

export default EnvelopeDesign