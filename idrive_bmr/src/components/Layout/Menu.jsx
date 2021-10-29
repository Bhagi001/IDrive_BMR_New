import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="main_sidebar slideHover">
  <div className="sidebar_bg_shadow" />
  <div className="inner_sidebar">
    <div className="sidebar_menu">
      <ul className="sidebar_menu_ul">
        <li className="li_icon dashboard_li">
          <NavLink to="/dashboard">
          <a className="active" href="dashboard.html">
            {" "}
            <span className="lhs_icon" />{" "}
            <span className="lhs_text">Dashboard</span>{" "}
          </a>
          </NavLink>
        </li>
        <li className="li_icon backups_li" id="tab_bkp_li">
          {" "}
          <a href="/" aria-current="page" className>
            {" "}
            <span className="lhs_icon" />
            <span className="lhs_text">Backups</span>
            <div className="svgArrow act">
              <div className="arrow" />
            </div>
          </a>
          <ul className="subMenu act" style={{ visibility: "hidden" }}>
            <li className="li_icon computer_li act">
              <a href="computer.html" aria-current="page">
                <span className="lhs_icon " />
                <span className="lhs_text">Computers</span>
              </a>
            </li>
            <li className="li_icon vmware_li">
              <a href="vmware.html" aria-current="page" className>
                <span className="lhs_icon " />
                <span className="lhs_text">VMware</span>
              </a>
            </li>
            <li className="li_icon hyperv_li">
              <a href="hyper-v.html" aria-current="page" className>
                <span className="lhs_icon " />
                <span className="lhs_text">Hyper-V</span>
              </a>
            </li>
            <li className="li_icon nw_li">
              <a href="nas-share.html" aria-current="page" className>
                <span className="lhs_icon " />
                <span className="lhs_text">Network Share</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="li_icon restore_li">
          <a href="restore.html">
            <span className="lhs_icon" />
            <span className="lhs_text">Restore</span>
          </a>
        </li>
        <li className="li_icon virtualization_li">
          <a href="virtualization.html">
            <span className="lhs_icon" />
            <span className="lhs_text">Virtualization</span>
          </a>
        </li>
        <li className="li_icon cr_li">
          <a href="cloud-replication.html" data-original-title title>
            <span className="lhs_icon" />
            <span className="lhs_text">Cloud Replication</span>
          </a>
        </li>
        <li className="li_icon logs_li">
          <a href="logs.html" data-original-title title>
            <span className="lhs_icon" />
            <span className="lhs_text">Logs</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="sidebar_bottom_section">
      <div className="sidebar_watchvideo">
        <div className="watch_video">
          <div className="video_icon">
            <div className="video_img" />
          </div>
          <div className="video_text">Watch a video</div>
        </div>
      </div>
      <div className="sidebar_version">
        <div className="version_no">Version 8.6.0</div>
        <div className="version_updated">Updated on Jan 20, 2021</div>
      </div>
      <div className="sidebar_brand">
        <p>® IDrive Inc.</p>
      </div>
    </div>
  </div>
</div>

  );
};
export default Menu;
