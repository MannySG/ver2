import React, {Component} from 'react';
import Loading from './Loading';
import NumberFormat from 'react-number-format';
import imgTurtle1 from '../assets/images/waitlist/turtle.gif';
import imgTurtle2 from '../assets/images/waitlist/turtle.gif';
import imgRock from '../assets/images/waitlist/rock.png';
import imgPlant from '../assets/images/waitlist/plant.png';

import imgJWL1 from '../assets/images/waitlist/item_img.png';
import imgJWL2 from '../assets/images/waitlist/imgJoinWaitList.png';

class JoinWaitList extends Component {
  constructor (props) {
    super (props);

    this.state = {};
    this.onKeyDown = this.onKeyDown.bind (this);
  }
  onKeyDown (e) {
    if (e.keyCode === 13) {
      this.props.onJoinWaitList ();
    }
  }
  render () {
    const {
      enableJoinWaitList,
      errorJoinWaitList,
      showErrJoinWaitList,
      onBlur,
      onChange,
      onFocus,
      onJoinWaitList,
      JoinWaitList,
      loading,
    } = this.props;
    return (
      <div className="joinWaitList">
        <div className="content_page">
          <h1>
            Without even trying you’ll be managing your earnings better than ever.
          </h1>
          <div className="content_joinWaitList">
            <div className="actions">
              <div className="wrapper_input">
                <NumberFormat
                  type="tel"
                  format="(###) ### - ####"
                  mask=""
                  name="joinWaitList"
                  id="joinWaitList"
                  className={
                    enableJoinWaitList
                      ? errorJoinWaitList ? 'error' : 'inputChecked'
                      : ''
                  }
                  value={JoinWaitList}
                  onChange={onChange}
                  placeholder="Your phone number"
                  autoComplete="off"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onKeyDown={this.onKeyDown}
                />
                {enableJoinWaitList &&
                  <div className="txt_ip">
                    Your phone number
                  </div>}
                {showErrJoinWaitList &&
                  <div className="text_error">{errorJoinWaitList}</div>}
              </div>
              <button
                type="submit"
                className="btn-waitlist"
                onClick={onJoinWaitList}
              >
                {loading ? <Loading /> : <span>Get early access</span>}
              </button>
            </div>
            <div className="imgJWL">
              <div className="img1">
                <img src={imgJWL1} alt="" />
              </div>
              <div className="img2">
                <img src={imgJWL2} alt="" />
              </div>
              <div className="img3">
                <div className="item_img3">
                  <img src={imgRock} alt="" />
                </div>
                <div className="item_img3">
                  <img src={imgPlant} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="turtle_run">
          <div className="turtle1">
            <img src={imgTurtle1} alt="" />
          </div>
          <div className="turtle2">
            <img src={imgTurtle2} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default JoinWaitList;
