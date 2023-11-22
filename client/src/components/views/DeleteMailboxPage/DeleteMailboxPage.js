import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

function DeleteMailboxPage(props) {

  const history = useHistory();

  const [UserId, setUserId] = useState('')
  const [MailboxId, setMailboxId] = useState('')

  useEffect(() => {
    console.log(props.match.params)
    if (props.match.params) {
      setUserId(props.match.params.UserId)
      setMailboxId(props.match.params.MailboxId)
    }
  }, [props])

  const DeleteMailbox = () => {

    const body = {
      mailboxId : MailboxId
    }

    Axios.post('/api/mailbox/deleteMailbox', body)
      .then((response) => {
        console.log('response', response)
        if (response.status === 200) {
          alert(`${response.data.title}가 정상적으로 삭제되었습니다!`)
          history.push('/main')
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
        <div style={{ width: '100%', height: '100%', fontSize: '20px', textAlign: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '300px' }}>
              <p>삭제하시겠습니까?</p>
        <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly' }}>
          <a href={`/mailbox/${UserId}`} style={{ textDecorationLine: 'none', color: '#000', width: '30%', height: '40px' }}>
            <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', marginTop: '29px' }}>
                <p style={{ margin: '0', fontSize: '20px', textAlign: 'center', paddingTop: '7px'}}>No</p>
            </div>
          </a>
          <button onClick={DeleteMailbox} style={{ width: '30%', height: '40px', backgroundColor: '#FAD993', borderRadius: '60px', paddingTop: '7px', marginTop: '29px', border: 0, fontFamily: 'NeoDunggeunmo', fontSize: '20px'  }}>
              <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>Yes</p>
          </button>
              </div>
        </div> 
    </div>
  )
}

export default DeleteMailboxPage