import React, { useEffect, useState } from 'react'

function MyMailboxPage(props) {

  const [UserId, setUserId] = useState('')

  useEffect(() => {
    // console.log(props.user.userData)
    if (props.user.userData !== undefined) {
      setUserId(props.user.userData)
    } else {
      console.log('nothing')
    }
  }, [props.user.userData])

  // console.log('uu', UserId._id)

  const IsAvailable = () => {
    return <div>
      <div style={{ width: '100%', height: '40px', backgroundColor: '#A3D6CC', borderRadius: '60px', textAlign: 'center', fontSize: '20px', paddingTop: '7px' }}>
        편지함 제목
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


  return (
    <div
      style={{
        width: '90%',
        margin: '3rem auto',
        fontFamily: 'NeoDunggeunmo'
      }}
    >
      {/* 생성된 우체통이 있는 경우 card */}

      {/* 생성된 우체통이 없는 경우 card */}
      <IsUnavailable />
    </div>
  )
}
export default MyMailboxPage