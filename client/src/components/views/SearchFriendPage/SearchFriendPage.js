import React, { useState } from 'react';
import Axios from 'axios';

import SearchFeature from './SearchFeature'


function SearchFriendPage() {

    const [Users, setUsers] = useState([])
    const [SearchTerm, setSearchTerm] = useState("")

    const getUsers = (body) => {
        Axios.post('/api/users/search', body)
            .then(response => {
                if (response.data.success) {
                    setUsers(response.data.user)
                } else {
                    alert("유저를 가져오는데 실패했습니다.")
                }
            })
    }

    const numberCards = Users.map((friend, index) => {
        return <div>
            <a href={`/mailbox/friend/${friend._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
                <div key={index} style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center', border: '2px solid #FFF', borderBottomColor: '#828282' }}>
                    <p>{friend.name}</p>
                    <p>{friend.number}</p>
                </div>
            </a>
        </div>
    })

    const updateSearchTerm = (newSearchTerm) => {

        let body = {
            searchTerm: newSearchTerm
        }

        setSearchTerm(newSearchTerm)
        getUsers(body)
    }

  return (
      <div
        style={{
            width: '90%',
            margin: '3rem auto',
            fontFamily: 'NeoDunggeunmo',
            color: '#0CAAB8'
          }}
      >

          <SearchFeature refreshFunction={updateSearchTerm} />

          <p style={{ fontSize: '20px', textAlign: 'center', color: '#000', marginTop: '40px' }}>받는 사람</p>
          
          <div style={{ width: '100%', height: '530px', borderRadius: '20px', border: '3px solid', overflow: 'auto'}}>
              {/* 검색된 전화 번호 card*/}
                {numberCards}
          </div>
      </div>
  )
}

export default SearchFriendPage