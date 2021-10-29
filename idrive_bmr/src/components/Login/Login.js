import React,{useState } from "react";
import { withRouter} from "react-router-dom";

/* const displayNone = {
  display: "none"
}; */

const Login =(props)=>{
  const [loginData, setLoginData] = useState({pass:"",username:"admin"});
 const submitHandler = () => {
    if(loginData.pass===""){
     alert("Password can not be empty"); 
    }
    else{
      if(loginData.pass==="1234"){
     props.history.push("/Dashboard");
      }
      else{
        alert("wrong password");
      }
    }
  };
    return (
      <div>
<header>
  <div className="wrapper">
    <div className="main_navbar">
      <div className="inner_navbar">
        <div className="navbar_left">
          <div className="navbar_logo">
            <img
              src={"https://www.idrive.com/bare-metal-recovery/bmr_new_design/source/images/bmr_pro.svg"}
              alt="BMR_logo"
              style={{ width: 200 }}
            />
          </div>
        </div>
        <div className="navbar_right">
          <ul className="navbar_right_ul">
            <li className=" ">
              <div className="add_computer_btn">
                <p className="flex_center nowrap">
                  {" "}
                  <span className="icon" /> Download{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
  <div className="login_module">
  <div className="login_wrapper">
    <header>
      <div className="wrapper">
        <div className="main_navbar">
          <div className="inner_navbar">
            <div className="navbar_left">
              <div className="navbar_logo">
                <img
                  src="source/images/bmr_pro.svg"
                  alt="BMR_logo"
                  style={{ width: 200 }}
                />
              </div>
            </div>
            <div className="navbar_right">
              <ul className="navbar_right_ul">
                <li className=" ">
                  <div className="add_computer_btn">
                    <p className="flex_center nowrap">
                      {" "}
                      <span className="icon" /> Download{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div className="box_wrap">
        <div className="loginBlock">
          <h1>Sign in to IDrive BMR</h1>
          <div className="loginwrapper">
            {/* Success / Error message  */}
            <div className="msg_showing">
              <div className="msg_box" style={{ display: "none" }}>
                <div className="common_msg success ">
                  <div className="icon" />
                  <div className="info">
                    {" "}
                    Lorem Ipsum is simply dummy text of the print.{" "}
                  </div>
                </div>
              </div>
              <div className="msg_box" style={{ display: "none" }}>
                <div className="common_msg error">
                  <div className="icon" />
                  <div className="info">
                    Lorem Ipsum is simply dummy text of the print
                  </div>
                </div>
              </div>
            </div>
            {/* Success / Error message  */}
            <div className="device_logo">
              <div className="logo" />
            </div>
            {/* Device details  */}
            <div className="deviceDetails">
              <p className="first device_serial">
                <span className="first_half">Device Serial</span>
                <span className="first_colon">:</span>{" "}
                <span className="sec_half">BMR-27QBPX2L4S57QBPX2L4S</span>
              </p>
              <p className="sec device_name">
                <span className="first_half">Device Name</span>
                <span className="first_colon">:</span>{" "}
                <span className="sec_half">BMR-Device-Finacial</span>{" "}
                <span
                  className="edit_devicename"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Edit"
                />
              </p>
              <p className="third device_ip">
                <span className="first_half">Server IP Address</span>
                <span className="first_colon">:</span>{" "}
                <span className="sec_half">192.168.1.39</span>
              </p>
            </div>
            {/* Device details  */}
            {/* Password */}
            <div className="password">
              <label>Password</label>
              <div className=" pwd_field_wrap">
                <input
                  type="password"
                  defaultValue="test"
                  className="input-text"
                  name="pwdIcon[password]"
                  value={loginData.pass}
                  onChange={e => setLoginData({ pass: e.target.value })}
                />
                {/* Add class "pwd-hide" below to view password */}
                <span
                  className="eye_icon pwd-show"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="show"
                  sytle="display:block;"
                />
                <span
                  className="eye_icon pwd-hide"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Hide"
                  sytle="display:none;"
                />
              </div>
            </div>
            {/* Password */}
            <div className="remem_box">
              <div className="rem_lhs">
                <input
                  type="checkbox"
                  onClick="checkIt();"
                  id="remember"
                  name="remember"
                  className="chkbox"
                />
                <label htmlFor="remember" className="resell-rememMe">
                  Remember me{" "}
                </label>
              </div>
              <div className="rem_rhs">
                <div className="forgot_pass">
                  <a href="/">Forgot password?</a>
                </div>
              </div>
            </div>
            <div className="signinWrap">
              <input
                onClick={()=>submitHandler()}
                name="Submit"
                type="submit"
                className="login_btn"
                defaultValue="Sign in"
              />
            </div>
          </div>
        </div>
        {/* box_wrap */}
      </div>
    </section>
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_left">
          <div className="app-version">Version 8.6.0</div>
        </div>
        <div className="footer_center copy_right_bmr">© IDrive Inc.</div>
        <div className="footer_right">
          <div className>
            {" "}
            <span className="support_icon">
              <span className="support_txt">Support</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
      </div>
    );
}

export default withRouter(Login);
