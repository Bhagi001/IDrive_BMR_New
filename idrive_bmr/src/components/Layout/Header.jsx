import React from "react";
const Header = props => {
  return (
    <React.Fragment>
      <section id="msg">
        <div
          className="success__msg"
          id="notify__succ"
          style={{ display: "none" }}
        >
          {" "}
          <span className="success__class" id="success__classBtn" />
          <p id="common__success__msg" />
        </div>
        <div
          className="error__msg"
          id="notify__err"
          style={{ display: "none" }}
        >
          {" "}
          <span className="success__class" />
          <p id="common__error__msg" />
        </div>
        <div
          className="alert__msg"
          id="notify_alert"
          style={{ display: "none" }}
        >
          {" "}
          <span className="success__class" />
          <p id="common__alert__msg" />
        </div>
      </section>
      ;<div className="main_navbar">
  <div className="inner_navbar">
    <div className="navbar_left">
      <div className="hamburger flex_center" title="Menu">
        {" "}
        <span className="icon">
          <svg
            id="svg_hamburger_menu_icon"
            data-name="Layer 1"
            viewBox="0 0 21.94 17"
          >
            <rect className="cls-hamburger_menu" width="21.94" height={3} />
            <rect
              className="cls-hamburger_menu"
              y={7}
              width="21.94"
              height={3}
            />
            <rect
              className="cls-hamburger_menu"
              y={14}
              width="21.94"
              height={3}
            />
          </svg>
        </span>{" "}
      </div>
      <div className="navbar_logo">
        <a href="/" />
      </div>
    </div>
    <div className="navbar_right">
      <ul className="navbar_right_ul">
        <li className=" ">
          <div className="add_computer_btn">
            <p className="flex_center nowrap">
              <span className="icon" />
              Add Computer
            </p>
          </div>
        </li>
        <li className="navbar_header_li header_notify  ">
          {" "}
          <span className="icon icon_noftify"> </span>
          <div className="notify_dropdown logs_icon">
            <div className="notify_dropdown__inner ">
              <ul className="notify_dropdown__inner_li ">
                <li>
                  <div className="notify_dd_item profile_update">
                    <p>Logged In Successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 4:38:34 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item email_update">
                    <p>Email address updated</p>
                    <p className="notify_dd_small">Oct 5, 2020, 3:44:48 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item logged_in">
                    <p>Logged In Successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 3:44:43 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item logged_out">
                    <p>Logged out successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 1:34:36 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item accessed_comp">
                    <p>Computer Accessed</p>
                    <p className="notify_dd_small">Oct 5, 2020, 1:34:36 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item add_comp">
                    <p>Computer added successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 1:34:36 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item remove_comp">
                    <p>Computer removed successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 1:34:24 PM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item comp_enabled">
                    <p>Computer enabled successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 9:02:46 AM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item comp_disabled">
                    <p>Computer disabled successfully</p>
                    <p className="notify_dd_small">Oct 5, 2020, 9:02:46 AM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item trusted_enabled">
                    <p>Disabled trusted devices</p>
                    <p className="notify_dd_small">Oct 5, 2020, 9:02:37 AM</p>
                  </div>
                </li>
                <li>
                  <div className="notify_dd_item trusted_disabled">
                    <p>Added to the 'Trusted Devices' list.</p>
                    <p className="notify_dd_small">Oct 4, 2020, 12:53:27 PM</p>
                  </div>
                </li>
                {/**/}
                {/**/}
              </ul>
            </div>
            <div className="see-more-wrap">
              <div className="see-more">
                <a routerlink="#" href="/">
                  See more
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="navbar_header_li header_profile ">
          {" "}
          <span className="icon icon_user"> </span>
          <div className="profile_dropdown">
            <ul className="profile_ul">
              <li className="usern_name">
                {" "}
                <a className="profile" href="/">
                  <span className="picon" />
                  Admin
                </a>
                <div className="btn">Email Setting</div>
              </li>
              <li className="change_pwd_li">
                <a className href="/">
                  <span className="cpicon" />
                  Change Password
                </a>
              </li>
              <li className="send_err_reprt_li">
                <a className href="/">
                  <span className="seicon" />
                  Send Error Report
                </a>
              </li>
              <li className="restart_li">
                <a className href="/">
                  <span className="rsicon" />
                  Restart
                </a>
              </li>
              <li className="shut_down_li">
                <a className href="/">
                  <span className="sdicon" />
                  Shut Down
                </a>
              </li>
              {/* <li><a class="web_logs" href="#"><span class="picon"></span>Web Activity Logs</a></li> */}
              {/* <li><a class="view_details" href="#"><span class="picon"></span>View Details</a></li> */}
              <li className="bb_0">
                <a className="logout" href="/">
                  <span className="picon" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

          </React.Fragment>
  );
};
export default Header;
