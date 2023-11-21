import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

function ExitPage(props) {

    const history = useHistory();

    const [UserId, setUserId] = useState('')

    useEffect(() => {
        if (props.user.userData) {
            // console.log(props.user.userData._id)
            setUserId(props.user.userData._id)
        }
    }, [props.user.userData])


    const ExitUser = () => {
        console.log(UserId)
        const body = {
            userId : UserId
        }

        Axios.post('/api/users/exit', body)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    alert('정상적으로 탈퇴되었습니다.')
                    history.push('/')
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
              <p>정말로 탈퇴하시겠습니까?</p>
        <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly' }}>
          <a href='/' style={{ textDecorationLine: 'none', color: '#000', width: '30%', height: '40px' }}>
            <div style={{ width: '100%', height: '40px', backgroundColor: '#B4E8E6', borderRadius: '60px', marginTop: '29px' }}>
                <p style={{ margin: '0', fontSize: '20px', textAlign: 'center', paddingTop: '7px'}}>No</p>
            </div>
          </a>
          <button onClick={ExitUser} style={{ width: '30%', height: '40px', backgroundColor: '#FAD993', borderRadius: '60px', paddingTop: '7px', marginTop: '29px', border: 0, fontFamily: 'NeoDunggeunmo', fontSize: '20px'  }}>
              <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>Yes</p>
          </button>
              </div>
        </div> 
    </div>
  )
}

export default ExitPage