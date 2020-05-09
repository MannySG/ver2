import React, {Component} from 'react';
import imgRightAuto from '../assets/images/waitlist/taxPaymentUpdate.png';
import imgCalculator from '../assets/images/waitlist/calculator.png';

class TaxPayment extends Component {
  render () {
    return (
      <div className="taxPayment">
        <div className="automated">
          <div className="auto_left">
            <h1>
              This
              {' '}
              <span>includes</span>
              {' '}
              taxes since they weren’t taken out when you were paid.
            </h1>
            {/* <p>
              We’ll schedule payments with the IRS keeping you on track and penalty free.
            </p> */}
          </div>
          <div className="auto_right">
            <img src={imgRightAuto} alt="" />
          </div>
        </div>
        <div className="your_opportunity">
          <div className="wrapper_opp">
            <div className="content_opp">
              <div className="opp_left">
                <img src={imgCalculator} alt="" />
              </div>
              <div className="opp_right">
                <h1>
                  Next time, include them when you bill.
                </h1>
                <p>
                  Tell us what you’d like to keep and we’ll tell you what to charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaxPayment;
