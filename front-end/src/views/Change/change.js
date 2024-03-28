import React, { useState, useEffect } from 'react';
import './change.scss';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';

export default function ChangeInfo({ closeChangeModal }) {



  const [form] = Form.useForm(); 

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

  const validateMessages = {
    required: 'Please input your ${label}!',
    types: {
      email: 'Email is not a valid!',
    },
  };



  const onChange = (values) => {
    console.log('onChange:', values);
    const modifiedValues = { ...values, user_email: values.email };
    delete modifiedValues.email;

    const token = JSON.parse(localStorage.getItem('currency')).token
    // headers: { 'Authorization': 'Bearer ' + getToken() }
    axios.patch('https://miguelbrazil-adrianepoxy-8000.codio-box.uk/users', modifiedValues, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status == 200) {
          clearFormFields()
          closeChangeModal()
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



  const clearFormFields = () => {
    form.setFieldsValue({password: null ,confirm:null});
  
  };



  return (
    <div className='container'>
      <div className="change-password">
        <h1>Change Password!</h1>
        <Form
          form={form}
          wrapperCol={{ span: 20, }}
          name="sign-in-basic"
          onFinish={onChange}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                validator: customValidation,
              },
            ]}
          >
            <Input.Password size='large' placeholder="Password" className='custom-input' />
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
                  return Promise.reject(new Error('Password do not match!'));
                },
              }),
            ]}
          >
            <Input.Password size='large' placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
