import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import Loading from './Loading';
import callApi from '../call-api/ApiCaller';
import * as ReactGA from 'react-ga';
import imgRight from '../assets/images/waitlist/imgRightUpdate.png';
import Footer from './Footer';
import {Redirect} from 'react-router-dom';
import logo from '../assets/images/waitlist/logo.png';

class VerifyCode extends Component {
  constructor (props) {
    super (props);

    this.state = {
      loading: false,
      verifyCode: '',
      enableCode: false,
      showErr: false,
      error: '',
      redirect: false,
    };
    this.onSubmit = this.onSubmit.bind (this);
    this.onChange = this.onChange.bind (this);
    this.onFocus = this.onFocus.bind (this);
    this.onBlur = this.onBlur.bind (this);
    this.onKeyDown = this.onKeyDown.bind (this);
    this.onSendAgain = this.onSendAgain.bind (this);
    this.onReload = this.onReload.bind (this);
  }

  componentDidMount () {
    const _code = document.getElementById ('code');
    const _phoneNumber = localStorage.getItem ('_phoneNumber');
    if (_phoneNumber) {
      _code.focus ();
      window.scrollTo (0, 0);
      ReactGA.pageview (
        this.props.location.pathname + this.props.location.search
      );
    } else {
      this.setState ({
        redirect: true,
      });
    }
  }

  onFocus (e) {
    this.setState ({
      enableCode: true,
    });
    e.target.placeholder = '';
  }
  onBlur (e) {
    const {verifyCode} = this.state;
    if (verifyCode === '' || verifyCode === undefined) {
      this.setState ({
        enableCode: false,
        showErr: false,
        error: '',
      });
      e.target.placeholder = 'Code';
    } else {
      this.setState ({
        enableCode: true,
      });
    }
  }
  onSubmit () {
    const _phoneNumber = localStorage.getItem ('_phoneNumber');
    const _userId = localStorage.getItem ('_userId');
    const _code = document.getElementById ('code');

    const {verifyCode} = this.state;

    if (verifyCode === '' || verifyCode === undefined) {
      _code.focus ();
    } else if (verifyCode.length > 1 && verifyCode.length < 6) {
      this.setState ({
        showErr: true,
        error: 'Verify code must be 6 digits!',
      });
    } else {
      this.setState ({
        showErr: false,
        error: '',
        loading: true,
      });
      if (_userId) {
        const data = {
          phone: _phoneNumber,
          code: verifyCode,
          id: _userId,
        };
        callApi ('verify-sms', 'POST', data)
          .then (res => {
            // console.log (res);
            localStorage.removeItem ('_userId');
            this.setState (
              {
                loading: false,
              },
              () => {
                this.props.history.push ('/waitlist/share-link');
              }
            );
          })
          .catch (err => {
            // console.log (err.response);
            this.setState ({
              showErr: true,
              loading: false,
              error: err.response.data.errorMessage,
            });
          });
      } else {
        const data = {
          phone: _phoneNumber,
          code: verifyCode,
          id: null,
        };
        callApi ('verify-sms', 'POST', data)
          .then (res => {
            // console.log (res);
            this.setState (
              {
                loading: false,
              },
              () => {
                this.props.history.push ('/waitlist/share-link');
              }
            );
          })
          .catch (err => {
            // console.log (err.response);
            this.setState ({
              showErr: true,
              loading: false,
              error: err.response.data.errorMessage,
            });
          });
      }
    }
  }
  onKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.onSubmit ();
    }
  }
  onSendAgain () {
    const _code = document.getElementById ('code');
    const _phoneNumber = localStorage.getItem ('_phoneNumber');
    this.setState (
      {
        showErr: false,
        error: '',
        verifyCode: '',
      },
      () => {
        _code.focus ();
      }
    );
    const data = {
      phone: _phoneNumber,
    };
    callApi ('send-sms', 'POST', data)
      .then (res => {
        // console.log (res);
      })
      .catch (err => {
        // console.log (err.response);
        this.setState ({
          showErr: true,
          loading: false,
          error: err.response.data.errorMessage,
        });
      });
  }
  onChange (e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState ({
      [name]: value,
    });
  }
  onReload () {
    window.location.reload ();
  }
  render () {
    const {
      verifyCode,
      enableCode,
      loading,
      error,
      showErr,
      redirect,
    } = this.state;
    const enabledBT = verifyCode.toString ().length === 6;
    if (redirect) {
      return <Redirect push to="/waitlist/" />;
    }
    return (
      <div className="waitlist_page page_other">
        <div className="logo_page">
          <div className="img_logo">
            <img src={logo} alt="logo" onClick={this.onReload} />
          </div>
        </div>
        <div className="wrapper_content">
          <div className="content_page">
            <div className="verifyCode">
              <h1>Verify phone number</h1>
              <div className="subtitle hidden_mobile">
                Enter the code we sent.
                <span onClick={this.onSendAgain}>Send again</span>
              </div>
              <div className="subtitle text_show_mobile">
                Didn't work?
                <span onClick={this.onSendAgain}>Resend code</span>
              </div>
              <div className="actions">
                <div className="wrapper_input">
                  <NumberFormat
                    id="code"
                    type="tel"
                    value={verifyCode}
                    onChange={this.onChange}
                    name="verifyCode"
                    placeholder="Code"
                    autoComplete="off"
                    maxLength="6"
                    className={
                      enableCode ? (error ? 'error' : 'inputChecked') : ''
                    }
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onKeyDown={this.onKeyDown}
                  />
                  {enableCode && <div className="txt_ip">Code</div>}
                  {showErr && <div className="text_error">{error}</div>}
                </div>
                <button
                  type="submit"
                  onClick={this.onSubmit}
                  className="hidden_mobile"
                >
                  {loading ? <Loading /> : <span>Submit</span>}
                </button>
                <button
                  type="submit"
                  onClick={this.onSubmit}
                  className={
                    !enabledBT
                      ? ' disabledBT show_text_shareLink'
                      : 'show_text_shareLink'
                  }
                  disabled={!enabledBT}
                >
                  {loading ? <Loading /> : <span>Verify</span>}
                </button>
              </div>
            </div>
            <div className="content_right">
              <div className="img_right">
                <img src={imgRight} alt="" />
              </div>
              {/* <div className="img_right" /> */}
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default VerifyCode;
