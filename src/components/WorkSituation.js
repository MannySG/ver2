import React, {Component} from 'react';
import imgLeft from '../assets/images/waitlist/workSituation/cloudLeft.png';
import imgRight from '../assets/images/waitlist/workSituation/cloudRight.png';
import imgCalendar from '../assets/images/waitlist/workSituation/Calendar.png';

class WorkSituation extends Component {
  constructor (props) {
    super (props);

    this.state = {};
  }

  render () {
    return (
      <div className="workSituation">
        <div className="content_workSituation">
          <h1>
            Made for any <br />
            work situation.
          </h1>
          <div className="situation">
            <div className="item_situation">
              <h3>Self-Employed</h3>
              <p>
                Quarterly payments are a hassle but not paying them can result in interest and penalties. We’ll do the calculations and manage the payments so you can forget about taxes and avoid penalties.
              </p>
            </div>
            <div className="item_situation">
              <h3>An Employee</h3>
              <p>
                Tax refunds act as an extra savings account for millions, and for millions more, their only savings account. We’ll help you build a larger refund so you can do even more with your savings.
              </p>
            </div>
            <div className="item_situation">
              <h3> Both</h3>
              <p>
                Working as a freelancer on the side could cut into your refund and even result in owing taxes. We help protect or even grow your refund so your extra earnings don’t come with any suprises
              </p>
            </div>
          </div>
          <div className="img_situation">
            <div className="img">
              <img src={imgLeft} alt="" />
            </div>
            <div className="img">
              <img src={imgRight} alt="" />
            </div>
            <div className="img">
              <img src={imgCalendar} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkSituation;
