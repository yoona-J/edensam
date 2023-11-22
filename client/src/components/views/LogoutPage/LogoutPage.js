import React, { useEffect } from 'react'
import Axios from 'axios';
import { auth } from '../../../_actions/user_actions'
import { useDispatch } from "react-redux";

function LogoutPage(props) {

  console.log(props)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
      .then(response => {
        console.log('res', response)
      })
  }, [])
  

    // const token = localStorage.getItem('Authorization')
    
    // if (token !== undefined) {
    //     localStorage.removeItem('Authorization', `Bearer ${token}`);
    //     delete Axios.defaults.headers.common['Authorization'];
    //     props.history.push('/')
    // }

  return (
    <div>LogoutPage</div>
  )
}

export default LogoutPage