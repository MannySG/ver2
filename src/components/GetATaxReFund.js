import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class GetATaxReFund extends Component {
  constructor (props) {
    super (props);
    this.state = {
      redirect: false,
    };
  }
  componentDidMount () {
    console.log (this.props);
    this.setState (
      {
        redirect: true,
      },
      () => {
        localStorage.setItem ('_userId', this.props.match.params.id);
      }
    );
  }

  render () {
    const {redirect} = this.state;
    if (redirect) {
      return <Redirect push to="/" />;
    }
    return <div />;
  }
}

export default GetATaxReFund;
