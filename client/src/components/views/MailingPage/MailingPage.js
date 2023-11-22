import React, { useState } from 'react'

import { Form, Button, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea'
import { useHistory } from "react-router-dom";

function MailingPage(props) {

    console.log(props)
    const FriendId = props.match.params.FriendId
    const FriendMailboxId = props.match.params.MailboxId

    const history = useHistory();

    const [Writer, setWriter] = useState('')
    const [Content, setContent] = useState('')

    const writerChangeHandler = (event) => {
        setWriter(event.target.value)
    }

    const contentChangeHandler = (event) => {
        setContent(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        history.push({
            pathname: `/mailbox/friend/${FriendId}/${FriendMailboxId}/mailing/deco`,
            state: { writer: Writer, content: Content }
        })
        }

    return (
        <div
            style={{
                width: '90%',
                margin: '3rem auto',
                fontFamily: 'NeoDunggeunmo'
            }}>
            <Form>
                <Input
                    placeholder='보내는 사람'
                    onChange={ writerChangeHandler }
                    value={Writer}
                    style={{
                        width: '100%',
                        height: '54px',
                        borderRadius: '20px',
                        border: '3px solid #828282',
                        textIndent: '15px',
                        fontSize: '15px'
                    }}></Input>
                <TextArea
                    type='textarea'
                    placeholder='편지 내용'
                    onChange={ contentChangeHandler }
                    value={Content}
                    style={{
                        width: '95%',
                        height: '506px',
                        borderRadius: '30px',
                        border: '3px solid #828282',
                        overflow: 'scroll',
                        marginTop: '14px',
                        fontSize: '15px',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                        paddingTop: '28px',
                        paddingLeft: '15px'
                    }}></TextArea>
                    <Button
                        style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '20px',
                            background: '#B4E8E6',
                            border: '0',
                            marginTop: '60px'
                        }}
                    onClick={submitHandler}>
                        다음
                    </Button>
            </Form>
        </div>
    )
}

export default MailingPage