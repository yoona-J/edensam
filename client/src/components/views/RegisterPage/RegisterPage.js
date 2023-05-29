import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button
} from 'antd';


function RegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        ID: '',
        password: '',
        confirmPassword: '',
        name: '',
        birth: '',
        number: '',
        favorite: ''
      }}
      validationSchema={Yup.object().shape({
        ID: Yup.string()
            .required('ID is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        name: Yup.string()
            .required('Name is required'),
        birth: Yup.string()
            .required('birth is required'),
        number: Yup.string()
            .required('Number is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            ID: values.ID,
            password: values.password,
            name: values.name,
            birth: values.birth,
            number: values.number,
            favorite: values.favorite
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              alert("회원가입이 완료되었습니다.")
              props.history.push("/");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
            <div
                style={{
                    width: '90%',
                    margin: '3rem auto',
                    fontFamily: 'NeoDunggeunmo'
                }}>
            <Form style={{ minWidth: '375px' }} onSubmit={handleSubmit} >
            <div style={{ paddingTop: '20px' }}>
                <p style={{fontSize: '15px', paddingLeft: '20px'}}>아이디/비밀번호</p>
              <Form.Item required hasFeedback validateStatus={errors.ID && touched.ID ? "error" : 'success'}>
                {errors.ID && touched.ID && (
                    <div className="input-feedback">{errors.ID}</div>
                    )}
                <Input
                  id="ID"
                  placeholder="아이디"
                  type="text"
                  value={values.ID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.ID && touched.ID ? 'text-input error' : 'text-input'
                  }
                  style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        textIndent: '15px'
                    }}/>
              </Form.Item>

              <Form.Item required hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="비밀번호"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                  style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        textIndent: '15px'
                    }}/>
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="비밀번호 재인증"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                  style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        textIndent: '15px'
                    }}/>
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>
              </div>

              <div style={{ paddingTop: '20px' }}>
                 <p style={{fontSize: '15px', paddingLeft: '20px'}}>개인정보 입력</p>
              <Form.Item required>
                <Input
                  id="name"
                  placeholder="이름"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                  style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        textIndent: '15px'
                    }}/>
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>
              <Form.Item required>
                <Input
                  id="birth"
                  placeholder="생년월일"
                  type="text"
                  value={values.birth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.birth && touched.birth ? 'text-input error' : 'text-input'
                  }
                  style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        textIndent: '15px'
                    }}/>
                {errors.birth && touched.birth && (
                  <div className="input-feedback">{errors.birth}</div>
                )}
              </Form.Item>
              </div>

              <div style={{ paddingTop: '20px' }}>
               <p style={{fontSize: '15px', paddingLeft: '20px'}}>휴대전화</p>
              <Form.Item required>
                <Input
                  id="number"
                  placeholder="전화번호 입력"
                  type="text"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.number && touched.number ? 'text-input error' : 'text-input'
                  }
                  style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '20px',
                        background: '#D9D9D9',
                        border: '0',
                        textIndent: '15px'
                    }}/>
                {errors.number && touched.number && (
                  <div className="input-feedback">{errors.number}</div>
                )}
              </Form.Item>
              </div>

              <Form.Item>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting} style={{
                                width: '100%',
                                height: '40px',
                                borderRadius: '20px',
                                background: '#A3D6CC',
                                border: '0',
                                marginTop: '20px'
                            }}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage