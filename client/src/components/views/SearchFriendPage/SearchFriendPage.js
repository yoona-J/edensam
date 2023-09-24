import React, { useState } from 'react';

function SearchFriendPage() {

    const [SearchTerm, setSearchTerm] = useState('')

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    

  return (
      <div
        style={{
                width: '90%',
                margin: '3rem auto',
              fontFamily: 'NeoDunggeunmo',
                color: '#828282'
          }}
      >
          <input type='number' value={SearchTerm} onChange={searchChangeHandler} placeholder='전화번호' style={{
              width: '100%',
              height: '40px',
              borderRadius: '20px'
          }} />

          <p style={{ fontSize: '15px', textAlign: 'center', color: '#000', marginTop: '40px' }}>받는 사람</p>
          
          <div style={{ width: '100%', height: '530px', borderRadius: '20px', border: '5px solid' }}>
              {/* 검색된 전화 번호 card*/}
          </div>
      </div>
  )
}

export default SearchFriendPage