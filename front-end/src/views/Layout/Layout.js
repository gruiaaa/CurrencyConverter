// Layout.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Layout.scss';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers/reducers';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Space, InputNumber, Select, Button, Modal, Flex, message } from 'antd';
import Login from '../Login/login';
import ChangeInfo from '../Change/change';
import { setUser } from '../../actions/actions';

const store = createStore(reducer);

const Layout = ({ user, setUser }) => {
  const [options, setOptions] = useState([]);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState('');
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [amount, setAmount] = useState(null);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const [changeModalVisible, setChangeModalVisible] = useState(false);

  const [exchangeRate, setExchangeRate] = useState(null);
  const [currentTime, setCurrenttime] = useState(null);

  const [currencyError, setcurrencyError] = useState(null);

  useEffect(() => {
    axios.get('https://miguelbrazil-adrianepoxy-8000.codio-box.uk/currency/list')
      .then(response => {
        const processedOptions = response.data.result.data.map(option => ({
          ...option,
          full_row: (
            <Space>
              <img
                src={option.flagUrl}
                alt={option.label}
                style={{ width: '36px', height: '27px', marginRight: '8px', marginTop: '12px' }}
              />
              {option.label}
            </Space>
          ),
        }));
        setOptions(processedOptions);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }, []);

  const handleFromCurrencyChange = value => {
    setSelectedFromCurrency(value);
    setFromCurrency(value);
    setExchangeRate(null)
  };


  const handleToCurrencyChange = value => {
    setToCurrency(value);
    setExchangeRate(null)
  };

  const handleAmountChange = value => {
    if (value) {
      setAmount(value);
    }
    else {
      setAmount(null);
    }

  };

  const handleConvertButtonClick = () => {
    console.log("this convert button click", user);
    if (!user) {
      setLoginModalVisible(true);

    } else {
      if (!fromCurrency || !toCurrency || !amount) {
        message.error('Please select from currency, to currency, and enter an amount(>=0).');
      } else {

        // 构建请求的参数
        const params = {
          fsym: fromCurrency,
          tsyms: toCurrency
        };
        const token = JSON.parse(localStorage.getItem('currency')).token

        axios.get('https://miguelbrazil-adrianepoxy-8000.codio-box.uk/currency/convert', {
          params,
          headers: {
            Authorization: `Bearer ${token}`
          },
          timeout: 5000
        })
          .then(response => {
            setExchangeRate(parseFloat(response.data.result.currentInterbankRate));
            setCurrenttime(response.data.result.fetchTime)
            setcurrencyError(null)
          })
          .catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
              const errorMessage = error.response.data.message;
              if (errorMessage.includes("Conversion")) {
                setcurrencyError(errorMessage);
              } else {
                // 如果消息不包含 "Conversion"，则显示默认错误消息
                message.error(errorMessage);
                // 可以选择是否设置错误状态
                setcurrencyError(null);
              }
            } else {
              message.error('Service is not available');
              setcurrencyError(null);
            }
          });

      }

    }
  };

  const closeLoginModal = (userData, setIsSignUp) => {
    if (userData.register) {
      setLoginModalVisible(true);
      setIsSignUp(false)

    }
    else {
      // handleConvertButtonClick()
      setLoginModalVisible(false);
      setUser(userData)
      console.log('this is user', userData);
      // handleConvertButtonClick()
    }

  };

  const closeChangeModal = () => {
    message.success("Change Password success!")
    setChangeModalVisible(false);
  };

  const handleLogOut = () => {
    const token = JSON.parse(localStorage.getItem('currency')).token
    axios.patch('https://miguelbrazil-adrianepoxy-8000.codio-box.uk/users/logout', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      if (response.status == 200) {
        message.success("Logout success!")
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
    setUser(null)
    setExchangeRate(null)
    setAmount(null)
    setSelectedFromCurrency("")
    setFromCurrency(null)
    setToCurrency(null)
    localStorage.removeItem('currency')
    window.location.reload();
  }



  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Provider store={store}>
      <div className="header">
        <h3 id="title">
          <img
            id="logo"
            src="https://pngimg.com/uploads/coin/coin_PNG36871.png"
            alt="logo"
          />
          My Currency Converter
        </h3>
        <Flex gap="small" wrap="wrap">
          {user ? (
            <>
              <div className="centered">Welcome, {user.email}</div>
              <Button type="text" id='change' onClick={() => setChangeModalVisible(true)}>ChangeInfo</Button>
              <Button type="primary" onClick={handleLogOut}>LogOut</Button>
            </>

          ) : (
            <>
              <Button type="text" id='sign-in' onClick={() => setLoginModalVisible(true)}>Sign IN</Button>
              <Button type="primary" id='sign-up' onClick={() => setLoginModalVisible(true)}>Sign UP</Button>
            </>
          )}
        </Flex>
      </div>
      <>
        <div id="title-container">
          <h3 id="app-title">Currency Converter</h3>
        </div>
        <section id="content-section">
          <Row justify="space-evenly">
            <Col span={6}>
              <h3>Amount</h3>
              <InputNumber
                addonAfter={selectedFromCurrency}
                className="custom-input"
                placeholder="Input a number"
                size="large"
                value={amount}
                onChange={handleAmountChange}
                min={0}
              />
            </Col>
            <Col span={7}>
              <h3>From</h3>
              <Select
                id='from-select'
                className="custom-input"
                showSearch
                size="large"
                placeholder="Select a Currency"
                filterOption={filterOption}
                onChange={handleFromCurrencyChange}
                optionLabelProp="full_row"
                options={options}
                value={fromCurrency}
                optionRender={(option) => (
                  <Space>
                    {option.data.full_row}
                  </Space>
                )}
              />
            </Col>
            <Col span={1} className="custom-arrow">
              <ArrowRightOutlined />
            </Col>
            <Col span={7}>
              <h3>To</h3>
              <Select
                className="custom-input"
                showSearch
                size="large"
                placeholder="Select a Currency"
                filterOption={filterOption}
                optionLabelProp="full_row"
                value={toCurrency}
                onChange={handleToCurrencyChange}
                options={options}
                optionRender={(option) => (
                  <Space>
                    {option.data.full_row}
                  </Space>
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={1}  >
              {exchangeRate && <div style={{ marginLeft: '10%', textAlign: "left" }}>
                <h1 style={{ marginLeft: 0 }}>1 {fromCurrency} = {exchangeRate.toFixed(5)} {toCurrency}</h1>
                <h3>1{toCurrency}  = {(1 / exchangeRate).toFixed(5)} {fromCurrency}</h3>
                <h3 style={{ color: "#4096ff" }}>{amount}{fromCurrency}  = {(exchangeRate * amount).toFixed(5)} {toCurrency}</h3>
                <h4>Fetch Time {currentTime}</h4>
              </div>
              }
              {currencyError &&<div style={{ marginLeft: '10%', textAlign: "left" }}>
                <h3 style={{ color: "red" }}>{currencyError}</h3>
              </div>}
            </Col>
            <Col span={4} offset={6}>
              <Button type="primary" size='large' onClick={handleConvertButtonClick}>Convert</Button>
            </Col>
          </Row>
        </section>
        {/* Modal for login */}
        <Modal
          className="custom-modal"
          open={loginModalVisible}
          onCancel={() => setLoginModalVisible(false)}
          footer={null}
          closable={false}
          width={800} // 设置宽度为 400px
          height={300}
        >
          <Login closeLoginModal={closeLoginModal} />
        </Modal>

        <Modal
          className="custom-modal"
          open={changeModalVisible}
          onCancel={() => setChangeModalVisible(false)}
          footer={null}
          closable={false}
          width={800} // 设置宽度为 400px
          height={300}
        >
          <ChangeInfo closeChangeModal={closeChangeModal} />
        </Modal>


      </>
    </Provider>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
