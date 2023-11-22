import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Checkbox, Form, Button } from 'antd';

import './FixCategoryPage.css'

function FixCategoryPage(props) {

    const [UserId, setUserId] = useState('')
    const [Favorite, setFavorite] = useState([])

    useEffect(() => {
        // console.log(props.user.userData)
        if (props.user.userData) {
            setUserId(props.user.userData._id)
        }
    }, [props])

    const favoriteChangeHandler = (checkedValues) => {
        setFavorite(checkedValues)
        console.log('is checked: ', checkedValues)
    }

    const changeHandler = (event) => {
        event.preventDefault();

        const body = {
            favorite: Favorite,
            ID: UserId
        }

        Axios.post('/api/users/changeFavorite', body)
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    alert('관심 상품 리스트가 수정되었습니다.')
                    props.history.push('/main')
                }
            })
    }    

  return (
      <div style={{ width: '90%', margin: '3rem auto', fontFamily: 'Pretendard-Medium' }}>
          <Form onSubmitCapture={changeHandler} className='category-input'>
                <div style={{ paddingTop: '20px' }}>
                    <p style={{fontSize: '20px', marginBottom: '26px' }}>관심 선물을 골라주세요!</p>
                    <Checkbox.Group onChange={favoriteChangeHandler} style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', fontSize: '15px'}}>
                        <Checkbox value={1} style={{marginBottom: '36px'}}>화장품/향수</Checkbox>
                        <Checkbox value={2} style={{marginBottom: '36px'}}>가전/디지털</Checkbox>
                        <Checkbox value={3} style={{marginBottom: '36px'}}>식품</Checkbox>
                        <Checkbox value={4} style={{marginBottom: '36px'}}>배달선물</Checkbox>
                        <Checkbox value={5} style={{marginBottom: '36px'}}>완구/취미</Checkbox>
                        <Checkbox value={6} style={{marginBottom: '36px'}}>건강</Checkbox>
                        <Checkbox value={7} style={{marginBottom: '36px'}}>생활용품</Checkbox>
                        <Checkbox value={8}>패션/의류</Checkbox>
                    </Checkbox.Group>
                </div>
                <a href='/'>
                        <Button
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    borderRadius: '20px',
                                    background: '#B4E8E6',
                                    border: '0',
                                    marginTop: '60px'
                                }}
                                htmlType='submit'>
                                수정하기
                        </Button>
                    </a>
          </Form>
        </div>
  )
}

export default FixCategoryPage