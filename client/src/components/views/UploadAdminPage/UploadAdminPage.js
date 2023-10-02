import React, { useState } from 'react'
import {Input, Form, Button} from 'antd'
import ImageUploader from './ImageUploader'
import Axios from 'axios';


function UploadAdminPage(props) {

    const [Maker, setMaker] = useState('')
    const [Title, setTitle] = useState('')
    const [Feed, setFeed] = useState('')
    const [MainImg, setMainImg] = useState('')
    const [ItemInfo, setItemInfo] = useState('')

    const MakerChangeHandler = (event) => {
        setMaker(event.target.value)
    }

    const TitleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const FeedChangeHandler = (event) => {
        setFeed(event.target.value)
    }
    
    const MainImgChangeHandler = (newImages) => {
        setMainImg(newImages)
    }
    
    const ItemInfoChangehandler = (newImages) => {
        setItemInfo(newImages)
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        if (!Maker | !Title | !Feed | !MainImg | !ItemInfo) {
            return alert('모든 값을 입력하세요')
        }

        const body = {
            item_maker: Maker,
            item_title: Title,
            item_image: MainImg,
            item_info: ItemInfo,
            how_much: Feed
        }

        console.log('body', body)

        Axios
            .post('/api/admin/upload', body)
            .then(response => {
                if (response.status === 200) {
                    alert('업로드 완료했어용')
                    props
                        .history
                        .push('/admin/upload')
                } else {
                    alert('업로드 실패ㅠㅠ')
                }
            })
    }

  return (
    <div style={{
                width: '100%',
                margin: '3rem auto',
                fontFamily: 'NeoDunggeunmo',
        }}>
            <p style={{textAlign: 'center', fontSize: '30px'}}>admin upload page</p>
            <Form onSubmitCapture={SubmitHandler}>
                <p style={{fontSize: '20px'}}>등록 업체</p>
              <Input
                        placeholder="등록 업체를 입력하세요"
                        onChange={MakerChangeHandler}
                        value={Maker}/>
                <p style={{fontSize: '20px'}}>상품 명</p>
                <Input 
                        placeholder="상품명을 입력하세요"
                        onChange={TitleChangeHandler}
                        value={Title}/>
                <p style={{fontSize: '20px'}}>메인 상품 이미지 업로드</p>
                <ImageUploader refreshFunction={MainImgChangeHandler} />
                <p style={{fontSize: '20px'}}>상품 가격</p>
                <Input 
                        placeholder="상품 가격을 입력하세요"
                        onChange={FeedChangeHandler}
                        value={Feed}/>
                <p style={{fontSize: '20px'}}>상품 정보 이미지 업로드</p>
              <ImageUploader refreshFunction={ItemInfoChangehandler} />
              <br />
              <Button htmlType='submit'>UPLOAD</Button>
              <br /><br />
                <Button>CANCEL</Button>
          </Form>
    </div>
  )
}

export default UploadAdminPage