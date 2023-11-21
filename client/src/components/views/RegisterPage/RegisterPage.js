import React, { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { registerUser } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';

import './RegisterPage.css'

function RegisterPage(props) {

    const dispatch = useDispatch()

    const [ID, setID] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswordConfirm, setPasswordConfirm] = useState('')
    const [Name, setName] = useState('')
    const [Birth, setBirth] = useState('')
    const [Number, setNumber] = useState('')
    const [Favorite, setFavorite] = useState([])

    const idChangeHandler = (event) => {
        setID(event.target.value)
    }
    
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }
    
    const passwordconfirmChangeHandler = (event) => {
        setPasswordConfirm(event.target.value)
    }
    
    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    
    const birthChangeHandler = (event) => {
        setBirth(event.target.value)
    }
    
    const numberChangeHandler = (event) => {
        setNumber(event.target.value)
    }
    
    const favoriteChangeHandler = (checkedValues) => {
        setFavorite(checkedValues)
        console.log('is checked: ', checkedValues)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if ( !ID | !Password | !PasswordConfirm | !Name | !Birth | !Number | !Favorite) {
            return alert('모든 내용을 작성해주세요.')
        } else if (Password !== PasswordConfirm) {
            return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
        } else if (Favorite.length === 0) {
            return alert('관심 선물을 1개 이상 선택해주세요.')
        } else if (Birth.length !== 6) {
            return alert('생일은 6자리로 입력해주세요. (ex.980101')
        } else if (Number.length !== 11) {
            return alert('전화번호는 숫자만 입력해주세요.')
        } else if (Password.length < 4) {
            console.log(Password.length)
            return alert('비밀번호는 4자리 이상 입력하세요.')
        }

        const body = {
            ID: ID,
            password: Password,
            name: Name,
            birth: Birth,
            number: Number,
            favorite: Favorite
        }

        console.log('body', body)

        dispatch(registerUser(body)).then(response => {
          if(response.payload.success) {
            alert('회원가입이 완료되었습니다.')
            props
              .history
              .push('/')
          } else if (response.payload.err.code === 11000) {
              console.log(response.payload.err.errmsg)
              alert('중복되는 아이디가 있습니다.')
          }
          else {
              console.log(response)
              alert('회원가입에 실패했습니다.')
          }
        })
    }

    return (
        <div style={{ width: '90%', margin: '3rem auto', fontFamily: 'Pretendard-Medium' }}>
            <Form onSubmitCapture={submitHandler} className='register-input'>
                <div style={{ paddingTop: '20px' }}>
                    <p style={{fontSize: '20px'}}>아이디/비밀번호</p>
                    <Input placeholder='아이디를 입력해주세요' onChange={idChangeHandler} value={ID} style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                border: '0',
                                textIndent: '15px',
                                marginBottom: '13px'
                            }} />
                    <Input placeholder='비밀번호를 입력해주세요' onChange={passwordChangeHandler} value={Password} type='password' style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                border: '0',
                                textIndent: '15px',
                                marginBottom: '13px'
                            }} />
                    <Input placeholder='비밀번호를 다시 입력해주세요' onChange={passwordconfirmChangeHandler} value={PasswordConfirm} type='password' style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                border: '0',
                                textIndent: '15px'
                            }} />
                </div>
                
                <div style={{ paddingTop: '20px' }}>
                    <p style={{fontSize: '20px' }}>개인정보 입력</p>
                    <Input placeholder='이름을 입력해주세요' onChange={nameChangeHandler} value={Name} style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                border: '0',
                                textIndent: '15px',
                                marginBottom: '13px'
                            }} />
                    <Input placeholder='생년월일을 입력해주세요(6자리)' onChange={birthChangeHandler} value={Birth} type='number' style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                border: '0',
                                textIndent: '15px'
                            }} />
                </div>

                <div style={{ paddingTop: '20px' }}>
                    <p style={{ fontSize: '20px' }}>휴대전화</p>
                    <div style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                background: '#F2F2F2',
                                border: '0',
                                textIndent: '15px',
                                marginBottom: '13px'
                    }}>
                        <p style={{ paddingTop: '10px' }}>대한민국 +82</p>
                            </div>
                    <Input placeholder='전화번호를 입력해주세요' onChange={numberChangeHandler} value={Number} type='number' style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                border: '0',
                                textIndent: '15px'
                            }} />
                </div>

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
                            확인
                    </Button>
                </a>
            </Form>

        </div>
  )
}

export default RegisterPage