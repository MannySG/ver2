import React, {Component} from 'react';
import logo from '../assets/images/waitlist/logo.png';
import {Link} from 'react-router-dom';
const pathname = window.location.pathname;

class Header extends Component {
  constructor (props) {
    super (props);

    this.state = {};
    this.onReload = this.onReload.bind (this);
    this.onJoined = this.onJoined.bind (this);
  }
  componentDidMount () {}
  onReload () {
    window.location.reload ();
  }
  onJoined () {
    this.setState ({
      redirectUsed: true,
    });
  }

  render () {
    const Header = () => {
      if (
        pathname === '/waitlist/verify-code/' ||
        pathname === '/waitlist/share-link/' ||
        pathname === '/waitlist/used-signup/'
      ) {
        return <div />;
      } else {
        return (
          <div className="text_header">
            <Link to="/waitlist/used-signup">Already joined?</Link>
            <span>See your place in line</span>
          </div>
        );
      }
    };

    return (
      <div className="header">
        <div className="logo_page">
          <div className="img_logo">
            <img src={logo} alt="logo" onClick={this.onReload} />
          </div>
          {<Header />}
        </div>
      </div>
    );
  }
}

export default Header;
