import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function DetailMailPage(props) {
  // console.log(props)

  const [MailboxId, setMailboxId] = useState('')
  const [Mail, setMail] = useState([])
  const [ProductId, setProductId] = useState('')
  const [Product, setProduct] = useState([])

  useEffect(() => {
    if (props.match.params) {
      // console.log(props.match.params)
      setMailboxId(props.match.params.mailId)

      Axios.post('/api/mail/getMail', { params: { 'mailId': props.match.params.mailId } })
        .then(response => {
          // console.log(response)
          setMail(response.data[0])
          setProductId(response.data[0].giftAvailable)
        })
    }
  }, [props.match.params])

  useEffect(() => {
    // console.log(ProductId)
    if (ProductId && Mail.giftAvailable !== 'false') {
      Axios.get(`/api/admin/upload/products_by_id?id=${ProductId}&type=single`)
        .then((response) => {
          // console.log(response.data.upload[0])
          setProduct(response.data.upload[0])
        })
    }
  }, [ProductId])
  
  // console.log(Mail)
  // console.log(Product)

  const giftBox = () => {
    if (Mail.giftAvailable === 'false') {
      return <div />
    } else if (Mail.giftAvailable !== 'false' && Product) {
      return <div>
        <div style={{
          width: '100%',
          height: '150px',
          borderRadius: '20px',
          border: '2px solid #37B8B3',
          backgroundColor: '#E9F8F7',
          marginTop: '28px',
          display: 'inline-flex',
          alignItems: 'center',
          fontFamily: 'Pretendard-Regular'
        }}>
            <img src={`http://localhost:5000/${Product.item_image}`} alt='item_image' style={{ width: '121px', borderRadius: '19px', margin: '15px' }} />
            <p style={{ fontSize: '15px', marginRight: '15px'}}>{ Product.item_title }</p>
          </div>
      </div>
    }
  }

  return (
      <div
      style={{
                width: '90%',
                margin: '3rem auto',
                fontFamily: 'NeoDunggeunmo'
            }}>
          <div style={{
                width: '100%',
                height: '54px',
                borderRadius: '20px',
                border: '3px solid #828282',
                textIndent: '15px',
                fontSize: '15px'
          }}>
            <p>{Mail.writer}</p>
          </div>
          <div style={{
                width: '100%',
                height: '431px',
                borderRadius: '30px',
                border: '3px solid #828282',
                overflow: 'scroll',
                marginTop: '26px',
                fontSize: '15px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
            }}>
              <p style={{ paddingLeft: '15px' }}> {Mail.content} </p>
            </div>
            {/* 선물 */}
            {giftBox()}
    </div>
  )
}
export default DetailMailPage