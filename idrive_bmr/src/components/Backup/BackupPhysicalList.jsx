import React from "react";
const BackupPhysicalList = () => {
  return (
    <li className="client_info">
      <div className="clients_info_lhs">
        <div className="checkBox-col">
          <input className="rec-check" type="checkbox" id />
        </div>
        <div className="client_status_wrap">
          <div className="status_icon_wrap">
            {" "}
            <span className="status_icon online" />{" "}
          </div>
          <div className="client_details">
            <div className="pc-name-wrap">
              {" "}
              <span className="pc-name">John-PC</span>{" "}
            </div>
            <div className="status-bar-wrap">
              <div className="status-bar">
                {" "}
                <span
                  className="status-bar-fill"
                  style={{ width: "10%" }}
                />{" "}
              </div>
            </div>
            <div className="status-txt-wrap">
              {" "}
              <span className="status-txt">
                Status : <span className="online">Online</span>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="backup_btn_wrap">
          <div className="bkp_btn">
            <i className="bkp_icon" />
            <a href="#">Backup Now</a>
          </div>
          <div className="full_bkp_btn">
            <div className="checkBox-col">
              <input className="rec-check" type="checkbox" id />
            </div>
            <span className="full__backup__text">Full image Backup</span>
          </div>
        </div>
      </div>
      <div className="clients_info_rhs">
        <div className="bkp_info_txt_wrap">
          <div className="info_title_wrap">
            <span className="info_title_txt">Information</span>
          </div>
          <div className="info_wrap_lhs">
            <div className="ip_info_wrap">
              <span className="ip_info_title">
                IP Address <span className="colon">:</span>{" "}
                <span className="ip_address">192.168.3.41</span>
              </span>
            </div>
            <div className="os_ver_wrap">
              <span className="os_info_title">
                OS Version <span className="colon">:</span>{" "}
                <span className="os_ver">Windows 10</span>
              </span>
            </div>
          </div>
          <div className="info_wrap_rhs">
            <div className="last_seen_info_wrap">
              <span className="last_seen_info_title">
                Last seen <span className="colon">:</span>{" "}
                <span className="last_seen">
                  <span className="date">30/08/2018 </span>
                  <span className="time">11:25</span>
                </span>
              </span>
            </div>
            <div className="last_bkp_wrap">
              <span className="bkp_info_title">
                Last backup <span className="colon">:</span>{" "}
                <span className="last_bkp">
                  <span className="date">11/02/2018 </span>
                  <span className="time">11:22</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="intigrity_txt_wrap">
          <div className="inte_title_wrap">
            <span className="inte_title_txt">Integrity</span>
          </div>
          <div className="inte_info_wrap">
            <div className="file_restore_info_wrap">
              <span className="restore_title">File Level Restore </span>
              <span className="restore_status" />
            </div>
            <div className="virt_info_wrap">
              <span className="virt_title">Virtualization</span>{" "}
              <span className="virt_status" />
            </div>
          </div>
        </div>
        <div className="more_action_wrap ">
          <span className="action_bar">...</span>
          <div className="more_opt_popup" style={{ left: "-144px", top: 88 }}>
            {" "}
            <span className="corner_span" />
            <ul className="more_opt_popup_inner" role="menu" style={{}}>
              <li className="first_child">
                <a>
                  <span className="txt">Add to Group</span>
                  <span className="icon" />
                </a>
              </li>
              <li className="second_child active">
                <a>
                  <span className="txt">Schedule Settings</span>
                  <span className="icon" />
                </a>
              </li>
              <li className="third_child">
                <a>
                  <span className="txt">View Recovery Points</span>
                  <span className="icon" />
                </a>
              </li>
              <li className="fourth_child">
                <a>
                  <span className="txt">Remove Host</span>
                  <span className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};
export default BackupPhysicalList;
