import React, { useState } from 'react';
import Axios from 'axios';

import SearchFeature from './SearchFeature'

function SearchFriendPage() {

    const [Users, setUsers] = useState([])
    const [SearchTerm, setSearchTerm] = useState("")

    const getUsers = (body) => {
        Axios.post('/api/users/search', body)
            .then(response => {
                // console.log()
                if (response.data.success) {
                    // console.log(response.data)
                    setUsers(response.data.user)
                } else {
                    alert("상품을 가져오는데 실패했습니다.")
                }
            })
    }

    const numberCards = Users.map((user, index) => {
        // console.log('Users', user)
        return <div>
            <a href={`/mailbox/friend/${user._id}`} style={{ textDecorationLine: 'none', color: '#000' }}>
                <div key={index} style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center', border: '2px solid #FFF', borderBottomColor: '#828282' }}>
                    <p>{user.name}</p>
                    <p>{user.number}</p>
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
              color: '#828282'
          }}
      >

          <SearchFeature refreshFunction={updateSearchTerm} />

          <p style={{ fontSize: '15px', textAlign: 'center', color: '#000', marginTop: '40px' }}>받는 사람</p>
          
          <div style={{ width: '100%', height: '530px', borderRadius: '20px', border: '5px solid', overflow: 'auto'}}>
              {/* 검색된 전화 번호 card*/}
                {numberCards}
          </div>
      </div>
  )
}

export default SearchFriendPage