import React from 'react';
import {Input, Button} from 'antd';
import LandingImg from './img/LandingImg.png';

function LandingPage() {
    return (
        <div
            style={{
                width: '90%',
                margin: '3rem auto',
                fontFamily: 'NeoDunggeunmo'
            }}>
            <img
                src={LandingImg}
                alt='LandingImg'
                style={{
                    width: '100%',
                    borderRadius: '30px'
                }}/>
            <div>
                <Input
                    placeholder='아이디'
                    style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        marginTop: '20px',
                        textIndent: '15px'
                    }}></Input>
                <Input
                    placeholder='비밀번호'
                    style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        marginTop: '20px',
                        textIndent: '15px'
                    }}></Input>
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
                        }}>
                        로그인
                </Button>
            </a>
            <div style={{ fontSize: '10px', color: '#828282', display: 'flex', flexDirection: 'low', justifyContent: 'center', marginTop: '20px' }}>
                <a href='/exit' style={{ marginRight: '20px', textDecorationLine: 'none', color: '#828282' }}>
                    <p>탈퇴</p>
                </a>
                <a href='/retake' style={{ marginRight: '20px', textDecorationLine: 'none', color: '#828282' }}>
                    <p>아이디/비밀번호 찾기</p>
                </a>
                <a href='/register' style={{ textDecorationLine: 'none', color: '#828282' }}>
                    <p>회원가입</p>
                </a>
            </div>
        </div>
    )
}

export default LandingPage