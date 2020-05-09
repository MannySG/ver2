import React, {Component} from 'react';
import imgFT from '../assets/images/waitlist/logo_ft.png';
import imgTwitter from '../assets/images/waitlist/twitter.png';
import imgInstagram from '../assets/images/waitlist/instagram.png';
import imgLinkedIn from '../assets/images/waitlist/linkedin.png';
import imgFavicon from '../assets/images/waitlist/favicon.png';

import {Link} from 'react-router-dom';
class Footer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      date: new Date ().getFullYear (),
    };
    this.onReload = this.onReload.bind (this);
  }
  onReload () {
    window.location.reload ();
  }

  render () {
    return (
      <div
        className={`${this.props.hidden ? 'hidden_footer footer_page' : 'footer_page'}`}
      >
        <div className="content_ft">
          <div className="ft_top">
            <div className="logo_ft">
              <Link to="/" onClick={this.onReload}>
                <img src={imgFT} alt="" />
              </Link>
            </div>
            <div className="social">
              <ul>
                <li className="item_menu">
                  <a
                    href="https://twitter.com/betterapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={imgTwitter} alt="" />
                  </a>
                </li>
                <li className="item_menu">
                  <a
                    href="https://www.instagram.com/betterapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={imgInstagram} alt="" />
                  </a>
                </li>
                <li className="item_menu">
                  <a
                    href="https://www.linkedin.com/mwlite/company/betterapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={imgLinkedIn} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="ft_bottom">
            <div className="img_bt">
              <img src={imgFavicon} alt="" />
            </div>
            <div className="menu_ft">
              <ul>
                <li className="item_menu" style={{width: '65px'}}>
                  <a onClick={this.onReload}>Home</a>
                </li>
                <li className="item_menu" style={{width: '84px'}}>
                  <a href="mailto:support@bettertax.co">Contact</a>
                </li>
                <li className="item_menu" style={{width: '59px'}}>
                  <a href="#">Legal</a>
                </li>
              </ul>

            </div>
            <div className="all_right">
              <i className="far fa-copyright" />
              <div className="text_bottom">
                <span>{this.state.date}</span>
                {' '}
                Safehold Inc.
                {' '}
                {/* <br />
                {' '}
                All rights reserved. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
