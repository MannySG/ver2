import React, {Component} from 'react';
import imgLeft from '../assets/images/waitlist/imgLeft.png';
import imgRight from '../assets/images/waitlist/imgRight.png';
import imgItem from '../assets/images/waitlist/item_img.png';
import imgMessenger from '../assets/images/waitlist/imgMessenger.png';
import imgMessenger2 from '../assets/images/waitlist/imgMessenger2.png';
import Footer from '../components/Footer';
import NumberFormat from 'react-number-format';
import callApi from '../call-api/ApiCaller';
import Loading from '../components/Loading';
import * as ReactGA from 'react-ga';
import {Redirect} from 'react-router-dom';
import Header from '../components/Header';
import BuiltEveryone from '../components/BuiltEveryone';
import JoinWaitList from '../components/JoinWaitList';
import TaxPayment from '../components/TaxPayment';
import TrackIncome from '../components/TrackIncome';
class Home extends Component {
  constructor (props) {
    super (props);
    this.state = {
      phoneNumber: '',
      enableNumber: false,
      loading: false,
      showErr: false,
      showErrJoinWaitList: false,
      error: '',
      errorJoinWaitList: '',
      redirectUsed: false,
      redirectVerify: false,
      joinWaitList: '',
      enableJoinWaitList: false,
    };
    this.phone = React.createRef ();
    this.onChange = this.onChange.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
    this.onJoinWaitList = this.onJoinWaitList.bind (this);
    this.onFocus = this.onFocus.bind (this);
    this.onBlur = this.onBlur.bind (this);
    this.onJoined = this.onJoined.bind (this);
    this.onKeyDown = this.onKeyDown.bind (this);
  }
  componentDidMount () {
    window.scrollTo (0, 0);
    ReactGA.pageview (
      this.props.location.pathname + this.props.location.search
    );
  }
  onFocus (index, e) {
    switch (index) {
      case 1:
        this.setState ({
          enableNumber: true,
        });
        e.target.placeholder = '';
        break;
      case 2:
        this.setState ({
          enableJoinWaitList: true,
        });
        e.target.placeholder = '';
        break;
    }
  }

  onBlur (index, e) {
    const {phoneNumber, joinWaitList} = this.state;

    switch (index) {
      case 1:
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
        break;
      case 2:
        if (joinWaitList === '' || joinWaitList === undefined) {
          this.setState ({
            enableJoinWaitList: false,
            showErr: false,
            error: '',
          });
          e.target.placeholder = 'Your phone number';
        } else {
          this.setState ({
            enableJoinWaitList: true,
          });
        }
        break;
    }
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
    const {phoneNumber} = this.state;
    const _phone = document.getElementById ('phoneNumber');
    if (phoneNumber === '' || phoneNumber === undefined) {
      _phone.focus ();
    } else if (phoneNumber.length > 1 && phoneNumber.length < 16) {
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
      const data = {
        phone: phoneNumber,
      };
      callApi ('send-sms', 'POST', data)
        .then (res => {
          // console.log (res);
          this.setState (
            {
              loading: false,
              redirectVerify: true,
            },
            () => {
              localStorage.setItem ('_phoneNumber', phoneNumber);
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
  onJoinWaitList () {
    const {joinWaitList} = this.state;
    const _phone = document.getElementById ('joinWaitList');
    if (joinWaitList === '' || joinWaitList === undefined) {
      _phone.focus ();
    } else if (joinWaitList.length > 1 && joinWaitList.length < 16) {
      this.setState ({
        showErrJoinWaitList: true,
        errorJoinWaitList: 'Phone number invalid',
      });
    } else {
      this.setState ({
        showErrJoinWaitList: false,
        errorJoinWaitList: '',
        loading: true,
      });
      const data = {
        phone: joinWaitList,
      };
      callApi ('send-sms', 'POST', data)
        .then (res => {
          // console.log (res);
          this.setState (
            {
              loading: false,
              redirectVerify: true,
            },
            () => {
              localStorage.setItem ('_phoneNumber', joinWaitList);
            }
          );
        })
        .catch (err => {
          // console.log (err.response);
          this.setState ({
            showErrJoinWaitList: true,
            loading: false,
            errorJoinWaitList: err.response.data.errorMessage,
          });
        });
    }
  }

  onJoined () {
    this.setState ({
      redirectUsed: true,
      showErr: false,
      error: '',
    });
  }

  onKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.onSubmit ();
    }
  }
  render () {
    const {
      phoneNumber,
      enableNumber,
      loading,
      showErr,
      error,
      redirectUsed,
      redirectVerify,
      joinWaitList,
      enableJoinWaitList,
      showErrJoinWaitList,
      errorJoinWaitList,
    } = this.state;
    if (redirectUsed) {
      return <Redirect push to="/waitlist/used-signup/" />;
    }
    if (redirectVerify) {
      return <Redirect push to="/waitlist/verify-code/" />;
    }

    return (
      <div className="waitlist_page">
        <Header />
        <div className="wrapper_content home_page">
          <div className="content_page content_home">
            <div className="content_left">
              <h1>
                Better manages your <br className="hidden_mobile" />
                self-employed income.
              </h1>
              <p>
                Just set it and forget it, we’ll take it from here.
              </p>
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
                    onFocus={e => this.onFocus (1, e)}
                    onBlur={e => this.onBlur (1, e)}
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
                  className="btn-waitlist"
                  onClick={this.onSubmit}
                >
                  {loading ? <Loading /> : <span>get early access</span>}
                </button>
              </div>
              <div className="already show_rabbits">
                <span onClick={this.onJoined}>Already joined?</span>
                <span>See your place in line</span>
              </div>
            </div>
            <div className="img_home">
              <div className="img_right">
                <img src={imgLeft} alt="" />
                <img src={imgItem} alt="" />
                <img src={imgRight} alt="" />
              </div>
              <div className="img_right" />
            </div>
          </div>
        </div>
        <TrackIncome />
        <div className="taxes">
          <div className="content_taxes">
            <div className="taxes_left">
              <h1>
                And calculate the perfect amount you’ll need to save.
              </h1>
              {/* <p>
                Get a text when income is received with the right amount to set aside.
              </p> */}
            </div>
            <div className="taxes_right">
              <div className="img_right">
                <img src={imgMessenger} alt="" />
              </div>
              {/* <div className="img_right text_show_mobile">
                <img src={imgMessenger2} alt="" />
              </div> */}
            </div>
          </div>
        </div>
        {/* <WorkSituation /> */}
        <TaxPayment />
        {/* <BuiltEveryone /> */}
        <JoinWaitList
          loading={loading}
          joinWaitList={joinWaitList}
          enableJoinWaitList={enableJoinWaitList}
          onJoinWaitList={this.onJoinWaitList}
          errorJoinWaitList={errorJoinWaitList}
          showErrJoinWaitList={showErrJoinWaitList}
          onChange={this.onChange}
          onBlur={e => this.onBlur (2, e)}
          onFocus={e => this.onFocus (2, e)}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
