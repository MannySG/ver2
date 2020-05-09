import React, {Component} from 'react';
import Loading from './Loading';
import callApi from '../call-api/ApiCaller';
import {message} from 'antd';
import * as copy from 'copy-to-clipboard';
import * as ReactGA from 'react-ga';
import imgRight from '../assets/images/waitlist/imgRightUpdate.png';
import Footer from './Footer';
import imgRabbits from '../assets/images/waitlist/rabbits.png';
import {Redirect} from 'react-router-dom';
import logo from '../assets/images/waitlist/logo.png';

class ShareLink extends Component {
  constructor (props) {
    super (props);

    this.state = {
      shareLink: '',
      loading: false,
      position: '',
      redirect: false,
    };
    this.onReload = this.onReload.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
    this.onShare = this.onShare.bind (this);
    this.onGetPosition = this.onGetPosition.bind (this);
  }
  componentDidMount () {
    const _phoneNumber = localStorage.getItem ('_phoneNumber');
    if (_phoneNumber) {
      this.onGetPosition (_phoneNumber);
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

  onGetPosition (phoneNumber) {
    const used = {
      phone: phoneNumber,
    };
    callApi ('get-phone-info', 'POST', used)
      .then (res => {
        // console.log (res);
        this.setState ({
          position: res.data.data.position,
          shareLink: res.data.data.url,
        });
      })
      .catch (err => {
        // console.log (err.response);
        alert (err.response.data.errorMessage);
        this.setState ({
          redirect: true,
        });
      });
  }

  onSubmit () {
    this.setState ({
      loading: true,
    });

    setTimeout (() => {
      this.setState (
        {
          loading: false,
        },
        () => {
          copy (this.state.shareLink);
          message.success ('Copied!');
        }
      );
    }, 500);
  }
  onShare () {
    this.setState ({
      loading: true,
    });
    if (navigator.share !== undefined) {
      this.setState ({
        loading: false,
      });
      navigator
        .share ({
          title: 'Better',
          url: this.state.shareLink,
        })
        .then (() => console.log ('Successful share'))
        .catch (error => {
          console.log ('Error sharing', error);
        });
    } else {
      setTimeout (() => {
        this.setState ({
          loading: false,
        });
      }, 1000);
    }
  }
  onReload () {
    window.location.reload ();
  }

  render () {
    const {position, shareLink, loading, redirect} = this.state;
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
            <div className="shareLink">
              <h1 className="rank">#{position}</h1>
              <p>
                You’re on the waitlist. Share your link and move up to the
                {' '}
                <span>#1 spot</span>
                {' '}
                every time someone uses it.
              </p>
              <div className="actions">
                <input
                  type="text"
                  readOnly
                  defaultValue={shareLink}
                  className="txt_link"
                />
                <textarea
                  className="url_share"
                  readOnly
                  cols="40"
                  defaultValue={shareLink}
                />
                <button
                  type="submit"
                  onClick={this.onSubmit}
                  className="hidden_mobile"
                >
                  {loading ? <Loading /> : <span>Copy Link</span>}
                </button>
                <button
                  type="submit"
                  onClick={this.onShare}
                  className="show_text_shareLink"
                >
                  {loading ? <Loading /> : <span>Share</span>}
                </button>
              </div>

            </div>
            <div className="content_right hidden_mobile">
              <div className="img_right">
                <img src={imgRight} alt="" />
              </div>
              <div className="img_right" />
            </div>
          </div>
        </div>
        {this.props.hidden ? <Footer hidden={true} /> : <Footer />}
        <div className="rabbits show_rabbits">
          <img src={imgRabbits} alt="" />
        </div>
      </div>
    );
  }
}

export default ShareLink;
