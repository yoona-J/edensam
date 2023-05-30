import React, { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Axios from 'axios';


function RegisterPage(props) {

    const [ID, setID] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswordConfirm, setPasswordConfirm] = useState('')
    const [Name, setName] = useState('')
    const [Birth, setBirth] = useState('')
    const [Number, setNumber] = useState('')
    const [Favorite, setFavorite] = useState('')

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
    
    const favoriteChangeHandler = (event) => {
        setFavorite(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if ( !ID | !Password | !PasswordConfirm | !Name | !Birth | !Number | !Favorite) {
            return alert('모든 내용을 작성해주세요.')
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

        Axios
            .post('./api/register', body)
            .then(response => {
                if (response.data.success) {
                    alert('회원가입이 완료되었습니다.')
                    props
                        .history
                        .push('/')
                } else {
                    alert('회원가입에 실패하였습니다.')
                }
            })
    }

  return (
    <div style={{ width: '90%', margin: '3rem auto', fontFamily: 'NeoDunggeunmo' }}>
        <Form onSubmitCapture={submitHandler}>
            <div style={{ paddingTop: '20px' }}>
                <p style={{fontSize: '15px', paddingLeft: '20px'}}>아이디/비밀번호</p>
                <Input placeholder='아이디' onChange={idChangeHandler} value={ID} style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#D9D9D9',
                            border: '0',
                            textIndent: '15px',
                            marginBottom: '13px'
                        }} />
                <Input placeholder='비밀번호' onChange={passwordChangeHandler} value={Password} style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#D9D9D9',
                            border: '0',
                            textIndent: '15px',
                            marginBottom: '13px'
                        }} />
                <Input placeholder='비밀번호 확인' onChange={passwordconfirmChangeHandler} value={PasswordConfirm} style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#D9D9D9',
                            border: '0',
                            textIndent: '15px'
                        }} />
            </div>
            
            <div style={{ paddingTop: '20px' }}>
                 <p style={{fontSize: '15px', paddingLeft: '20px'}}>개인정보 입력</p>
                 <Input placeholder='이름' onChange={nameChangeHandler} value={Name} style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#D9D9D9',
                            border: '0',
                            textIndent: '15px',
                            marginBottom: '13px'
                        }} />
                <Input placeholder='생년월일' onChange={birthChangeHandler} value={Birth} style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#D9D9D9',
                            border: '0',
                            textIndent: '15px'
                        }} />
            </div>

            <div style={{ paddingTop: '20px' }}>
                 <p style={{fontSize: '15px', paddingLeft: '20px'}}>휴대전화</p>
                 <Input placeholder='전화번호 입력' onChange={numberChangeHandler} value={Number} style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#D9D9D9',
                            border: '0',
                            textIndent: '15px'
                        }} />
            </div>

            <div style={{ paddingTop: '20px' }}>
                 <p style={{fontSize: '15px', textAlign: 'center', padding: '30px'}}>관심 선물을 골라주세요!</p>
                 <Checkbox.Group onChange={favoriteChangeHandler} style={{ display: 'flex', width: '230px', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', margin: '0 auto'}}>
                    <Checkbox style={{marginBottom: '20px'}}>화장품/향수</Checkbox>
                    <Checkbox>가전/디지털</Checkbox>
                    <Checkbox style={{marginBottom: '20px'}}>식품</Checkbox>
                    <Checkbox>배달선물</Checkbox>
                    <Checkbox>완구/취미</Checkbox>
                    <Checkbox style={{marginBottom: '20px'}}>건강</Checkbox>
                    <Checkbox>생활용품</Checkbox>
                    <Checkbox>패션/의류</Checkbox>
                 </Checkbox.Group>
            </div>
            <a href='/main'>
                <Button
                        style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#A3D6CC',
                            border: '0',
                            marginTop: '20px'
                        }}
                        htmlType='submit'>
                        로그인
                </Button>
            </a>
        </Form>

    </div>
  )
}

export default RegisterPage