import React, {PureComponent} from 'react';
import img1 from '../assets/images/waitlist/bulit_everyone/icon1.png';
import img2 from '../assets/images/waitlist/bulit_everyone/icon2.png';
import img3 from '../assets/images/waitlist/bulit_everyone/icon3.png';
import img_icon from '../assets/images/waitlist/bulit_everyone/item_icon.png';
import img_icon2 from '../assets/images/waitlist/bulit_everyone/item_icon2.png';

class BuiltEveryone extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {};
  }

  render () {
    return (
      <div className="built_everyone">
        <div className="content_built">
          <h1>
            Built for today’s <br />
            independent workforce.
          </h1>
          <div className="everyone">
            <div className="item_everyone">
              <div className="img_item">
                <img src={img1} alt="" />
                <img src={img_icon} alt="" />
              </div>
              <h4>Self-employed</h4>
              <p>
                We manage quartely taxes from start to finish and can help you grow your savings.
              </p>
            </div>
            <div className="item_everyone">
              <div className="img_item">
                <img src={img2} alt="" />
                <img src={img_icon2} alt="" />
              </div>
              <h4>Employee</h4>
              <p>
                We work alongside your current withholdings to increase the amount you save.
              </p>
            </div>
            <div className="item_everyone">
              <div className="img_item">
                <img src={img3} alt="" />
                <img src={img_icon} alt="" />
                <img src={img_icon2} alt="" />

              </div>
              <h4>Both</h4>
              <p>
                We ensure your extra income doesn’t come at the cost of reduced savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuiltEveryone;
