import React from 'react'

function Footer() {
  return (
    <div
        style={{
            width: '90%',
            margin: '3rem auto',
            fontFamily: 'NeoDunggeunmo'
          }}>
        <div style={{ fontSize: '10px', color: '#828282', display: 'flex', flexDirection: 'low', justifyContent: 'center', marginTop: '20px' }}>
              <a href='/logout' style={{ textDecorationLine: 'none', color: '#828282' }}>로그아웃</a>
        </div>
    </div>
  )
}

export default Footer
