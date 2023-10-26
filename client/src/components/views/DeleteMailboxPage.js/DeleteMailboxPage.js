import React from 'react'

function DeleteMailboxPage() {
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
                    <div style={{ width: '30%', height: '40px', backgroundColor: '#A3D6CC', borderRadius: '60px', paddingTop: '7px', marginTop: '29px' }}>
                        <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>No</p>
                    </div>
                    <div style={{ width: '30%', height: '40px', backgroundColor: '#FAD993', borderRadius: '60px', paddingTop: '7px', marginTop: '29px' }}>
                        <p style={{ margin: '0', fontSize: '20px', textAlign: 'center'}}>Yes</p>
                    </div>
              </div>
        </div> 
    </div>
  )
}

export default DeleteMailboxPage