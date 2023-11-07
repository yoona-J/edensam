import React, {useEffect} from 'react'

import { useHistory } from "react-router-dom";

function MailingSuccessPage() {

  const history = useHistory();

  const timeout = () => {
		setTimeout(() => {
      history.push('/main');
		}, 2000);
  };
  
	useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	}); 

  return (
    <div
      style={{
        width: '90%',
        margin: '3rem auto',
        fontFamily: 'NeoDunggeunmo'
      }}
    >
      <div style={{ width: '100%', height: '100%', fontSize: '20px', textAlign: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '300px' }}>
        <p style={{ marginBottom: '0px' }}>전송 완료</p>
        <p>되었습니다!</p>
      </div>
    </div>
  )
}

export default MailingSuccessPage