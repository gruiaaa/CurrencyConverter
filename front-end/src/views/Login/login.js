import React, { useState, useEffect } from 'react';
import './login.scss';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';

export default function Login({ closeLoginModal }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form_login] = Form.useForm(); 
  const [form_register] = Form.useForm(); 
  const clearFormFields = () => {
    form_register.setFieldsValue({ email: null, password: null ,confirm:null});
    form_login.setFieldsValue({ email: null, password: null});
  };



  const onRegister = (values) => {
    console.log('onRegister:', values);
    
    const modifiedValues = { ...values, user_email: values.email };
    delete modifiedValues.email; 
    delete modifiedValues.confirm; 

    axios.post('https://miguelbrazil-adrianepoxy-8000.codio-box.uk/users/register', modifiedValues)
    .then(response => {
      // 检查后端返回的数据，这里假设后端返回一个包含用户信息的对象
      if (response.status === 200) {
        const modifiedValues = { ...values, register: true};
        closeLoginModal(modifiedValues,setIsSignUp);
        clearFormFields()
        message.success("Register success! Please sign in!")
      }
    })
    .catch(error => {
      if(error.response&&error.response.data.message){
        console.error('There was a problem with request:', error);
        message.error(error.response.data.message);
      }else{
        message.error('Service is not available');
      }
    });



  };

  const onLogin = (values) => {
    const modifiedValues = { ...values, user_email: values.email };
    delete modifiedValues.email; 
    // 发送登录请求到后端
    axios.post('https://miguelbrazil-adrianepoxy-8000.codio-box.uk/users/login', modifiedValues)
      .then(response => {
        // 检查后端返回的数据，这里假设后端返回一个包含用户信息的对象
        if (response.status == 200) {
          const data = response.data;
          const modifiedValues = { ...values, token: data.result.token };
          delete modifiedValues.password; 
          closeLoginModal(modifiedValues); 
          localStorage.setItem('currency',JSON.stringify(modifiedValues))
          clearFormFields()
          message.success("Login success!")
        } 
      })
      .catch(error => {
        if(error.response&&error.response.data.message){
          console.error('There was a problem with request:', error);
          message.error(error.response.data.message);
        }else{
          message.error('Service is not available');
        }
      });

  };

  const changeSignUp = () => {
    setIsSignUp(true);
  };

  const changeSignIn = () => {
    setIsSignUp(false);
  };



  const validateMessages = {
    required: 'Please input your ${label}!',
    types: {
      email: 'Email is not a valid!',
    },
  };


  const customValidation = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (!value) {
        reject('Please input your password!');
      } else if (value.length < 6 ||value.length >32) {
        reject(`Length of ${rule.field} should be [6,32]`);
      } else {
        resolve();
      }
    });
  };


  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <h1>Cerate Account!</h1>
        <Form
          form={form_register}
          wrapperCol={{ span: 20, }}
          name="sign-up-basic"
          onFinish={onRegister}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >

          <Form.Item
            name='email'
            hasFeedback
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input size='large' placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                validator: customValidation,
              },
            ]}
          >
            <Input.Password size='large' placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirm"

            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password size='large' placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="form-container sign-in-container">
        <h1>Sign IN!</h1>
        <Form
          form={form_login}
          wrapperCol={{ span: 20, }}
          name="sign-in-basic"
          onFinish={onLogin}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >

          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input size='large' placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password size='large' placeholder="Password" />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              Sign IN
            </Button>
          </Form.Item>
        </Form>



      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please log in with your personal info</p>
            <button className="ghost" id="signIn" onClick={changeSignIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" id="signUp" onClick={changeSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
