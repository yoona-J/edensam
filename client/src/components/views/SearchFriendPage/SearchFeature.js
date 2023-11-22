import React, { useState } from 'react'
import { Input } from 'antd';

import './SearchFeature.css'

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState('')

    const searchChangeHandler = (event) => {
        // console.log('eee', event.currentTarget.value)
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

  return (
      <div>
          <Input
                placeholder='전화번호로 친구를 찾아보세요'
                value={SearchTerm}
              onChange={searchChangeHandler}
              className='search-input'
                style={{
                    width: '365px',
                    height: '40px',
                    borderRadius: '20px',
                    paddingLeft: '10px',
                }}
          />
    </div>
  )
}

export default SearchFeature