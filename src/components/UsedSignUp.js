import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import Loading from './Loading';
import callApi from '../call-api/ApiCaller';
import imgRight from '../assets/images/waitlist/imgRightUpdate.png';
import * as ReactGA from 'react-ga';
import Footer from './Footer';
import logo from '../assets/images/waitlist/logo.png';

class UsedSignUp extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showErr: false,
      error: '',
      loading: false,
      enableNumber: false,
      phoneNumber: '',
    };
    this.onChange = this.onChange.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
    this.onFocus = this.onFocus.bind (this);
    this.onBlur = this.onBlur.bind (this);
    this.onKeyDown = this.onKeyDown.bind (this);
    this.onReload = this.onReload.bind (this);
  }

  componentDidMount () {
    const _phoneNumber = document.getElementById ('phoneNumber');
    _phoneNumber.focus ();
    window.scrollTo (0, 0);
    ReactGA.pageview (
      this.props.location.pathname + this.props.location.search
    );
  }
  onChange (e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState ({
      [name]: value,
    });
  }
  onSubmit () {
    const _phone = document.getElementById ('phoneNumber');
    const {phoneNumber} = this.state;
    if (phoneNumber === '' || phoneNumber === undefined) {
      _phone.focus ();
    } else if (phoneNumber.length > 1 && phoneNumber.length < 14) {
      this.setState ({
        showErr: true,
        error: 'Phone number invalid',
      });
    } else {
      this.setState ({
        showErr: false,
        error: '',
        loading: true,
      });
      const used = {
        phone: phoneNumber,
      };
      callApi ('get-phone-info', 'POST', used)
        .then (res => {
          // console.log (res);
          this.setState (
            {
              loading: false,
            },
            () => {
              localStorage.setItem ('_phoneNumber', phoneNumber);

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
  onFocus (e) {
    this.setState ({
      enableNumber: true,
    });
    e.target.placeholder = '';
  }

  onBlur (e) {
    const {phoneNumber} = this.state;
    if (phoneNumber === '' || phoneNumber === undefined) {
      this.setState ({
        enableNumber: false,
        showErr: false,
        error: '',
      });
      e.target.placeholder = 'Your phone number';
    } else {
      this.setState ({
        enableNumber: true,
      });
    }
  }
  onKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.onSubmit ();
    }
  }
  onReload () {
    window.location.reload ();
  }
  render () {
    const {showErr, loading, error, phoneNumber, enableNumber} = this.state;

    const enabledBT = phoneNumber.toString ().length === 16;

    return (
      <div className="waitlist_page page_other">
        <div className="logo_page">
          <div className="img_logo">
            <img src={logo} alt="logo" onClick={this.onReload} />
          </div>
        </div>
        <div className="wrapper_content">
          <div className="content_page">
            <div className="verifyCode usedSignUp">
              <h1>Enter phone number</h1>
              <div className="subtitle hidden_mobile">
                Enter the phone number you signed up with.
              </div>
              <div className="subtitle show_text_shareLink">
                Enter the number you used to sign up.
              </div>
              <div className="actions">
                <div className="wrapper_input">
                  <NumberFormat
                    type="tel"
                    format="(###) ### - ####"
                    mask=""
                    name="phoneNumber"
                    id="phoneNumber"
                    className={
                      enableNumber ? (error ? 'error' : 'inputChecked') : ''
                    }
                    value={phoneNumber}
                    onChange={this.onChange}
                    placeholder="Your phone number"
                    autoComplete="off"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onKeyDown={this.onKeyDown}
                  />
                  {enableNumber &&
                    <div className="txt_ip">
                      Your phone number
                    </div>}
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
                  {loading ? <Loading /> : <span>Next</span>}
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

export default UsedSignUp;
