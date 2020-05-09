import React, {Component} from 'react';
import imgActivity from '../assets/images/waitlist/activity.png';

export default class TrackIncome extends Component {
  render () {
    return (
      <div className="trackIncome">
        <div className="content_trackIncome">
          <div className="trackIncome_left">
            <img src={imgActivity} alt="" />
          </div>
          <div className="trackIncome_right">
            <h1>
              We keep track of your income.
            </h1>
            <p>
              By linking your account we can track income deposits as they are received.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
