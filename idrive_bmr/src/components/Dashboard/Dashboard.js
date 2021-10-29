import React from "react";
import Layout from '../Layout/Layout'
const Dashboard=()=> {
    return (
      <Layout>
     ;<div className="main_container ">
  <div className="middleContainer">
    <div className="fixed_container">
      <div className="container_navbar">
        <div className="inner_container_navbar">
          <div className="container_navbar_right">
            <div className="main_header_title">
              <p>Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main_dashboard_container">
      {/* <div class="scrollbody"> */}
      <div className="dashboardTopSection">
        <div className="col devicInfoBlock">
          <div className="col_top">
            <h3>Device Information</h3>
            <span>Mar 16 2019, 04:33 AM (Indian)</span>{" "}
          </div>
          <div className="col_middle">
            <ul>
              <li className=" devicerow_li">
                <p>Device Serial</p>
                <p>BMR-1W6D3C3EAE</p>
              </li>
              <li className=" devicerow_li">
                <p>Server IP</p>
                <p>192.168.1.2</p>
              </li>
              <li className=" devicerow_li">
                <p>LAN Speed</p>
                <p>400 Mbps</p>
              </li>
            </ul>
          </div>
          <div className="col_bottom">
            <div className="sysHealthStatus">
              <p>
                <span>Raid Health Status:</span>{" "}
                <span className="good">Good</span>
              </p>
              <p>
                <span>OS drive Helath Status:</span>{" "}
                <span className="warning">Warning</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col localStorageBlock">
          <div className="col_top">
            <h3>Local Storage</h3>
            <span className="calcValue">100 GB of 6 TB used</span>
            <div className="progressBlock">
              <label>100 GB of 6 TB used</label>
              <div className="progressBar">
                <div
                  className="progression comps"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="Computers 11.4 GB"
                  aria-current="page"
                />
                <div
                  className="progression vmware"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="Vmware 18.2 GB"
                  aria-current="page"
                />
                <div
                  className="progression hypserver"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="Hyper-V Servers 40.5 GB"
                  aria-current="page"
                />
                <div
                  className="progression nshared"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="NAS 20.8 GB"
                  aria-current="page"
                />
              </div>
            </div>
          </div>
          <div className="col_middle">
            <div className="piechart">
              <div id="element1" className="element" />
            </div>
            <ul className="listitem">
              <li>
                <p className="comp_dot">Computer</p>
                <p>11.4 GB</p>
              </li>
              <li>
                <p className="vm_dot">VMware</p>
                <p>18.2 GB</p>
              </li>
              <li>
                <p className="hyp_dot">Hyper-V Servers</p>
                <p>40.5 GB</p>
              </li>
              <li>
                <p className="nw_dot">Network Shared</p>
                <p>20.8 MB</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col cloudstorageBlock">
          <div className="col_top">
            <h3>Cloud Storage</h3>
            <span className="userBlock">William Smith</span>{" "}
          </div>
          <div className="col_middle">
            <div className="progressBlock">
              <label>500 GB of 12 TB used</label>
              <div className="progressBar">
                <div className="progression" />
              </div>
            </div>
            <ul className="listitem">
              <li>
                <p>Computer</p>
                <p>Mar 16 2019, 04:33 AM</p>
                <p>1.37 GB</p>
              </li>
              <li>
                <p>VMware</p>
                <p>Mar 16 2019, 04:33 AM</p>
                <p>1.37 GB</p>
              </li>
              <li>
                <p>Hyper-V Servers</p>
                <p>Mar 16 2019, 04:33 AM</p>
                <p>1.37 GB</p>
              </li>
              <li>
                <p>Network Share</p>
                <p>Mar 16 2019, 04:33 AM</p>
                <p>1.37 GB</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col statusDashBlock">
          <div className="col_top">
            <h3>Status</h3>
          </div>
          <div className="col_middle">
            <div className="status_block">
              <p className="nobg">
                <text className="texthide">Status</text>
                <span
                  className="phymachine_status"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Physical Machine"
                  aria-current="page"
                />{" "}
                <span
                  className="vmware_status"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Vmware"
                  aria-current="page"
                />{" "}
                <span
                  className="raid_status"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="NAS"
                  aria-current="page"
                />{" "}
              </p>
              <p>
                <text>Backup Devices</text>
                <span>63</span>
                <span>13</span>
                <span>21</span>{" "}
              </p>
              <p>
                <text>Virtualization</text>
                <span>63</span>
                <span>13</span>
                <span>21</span>{" "}
              </p>
              <p>
                <text>Restore</text>
                <span>63</span>
                <span>13</span>
                <span>21</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="backupContainer">
        <h3 className="titleHead">Backup status</h3>
        <div className="tabcontainer">
          <div className="tabtype computer_tab active">Computer</div>
          <div className="tabtype vmware_tab">VMware</div>
          <div className="tabtype nas_share_tab">Network share</div>
        </div>
        <div className="computer_table">
          <div className="backupTableWrapper">
            <div className="backupHeader">
              <div className="backup_name">
                <span className="name">Name </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_group">
                <span className="group">Group </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_integrity">
                <span className="integrity">Integrity Status </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_lastbkp">
                <span className="lastbkp">Last Backup </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_size">
                <span className="size">Size </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_attempts">
                <span className="attempts">Last 10 Backup attempts </span>
                <span className="sort ascend" />
              </div>
            </div>
            <div className="backupTablecontainer">
              <div className="rowBlock">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Test-Admin-PC</span>
                  </div>
                  <div className="backup_group">Tech</div>
                  <div className="backup_integrity">
                    <span className="integrity_success" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Use this wrap for showing common message */}
                <div className="backup_details" style={{ display: "none" }}>
                  <p className="warning_msg_color fs_16">
                    System backup completed successfully.
                  </p>
                </div>
              </div>
              <div className="rowBlock rowError">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Daniel-Flin-PC</span>
                  </div>
                  <div className="backup_group">Finance</div>
                  <div className="backup_integrity">
                    <span className="integrity_error" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backup_details">
                  <p className="error_msg_color fs_16">
                    System encountered an error and was unable to complete your
                    request. Try again.
                  </p>
                </div>
              </div>
              <div className="rowBlock">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Michael-Jordan-PC</span>
                  </div>
                  <div className="backup_group">Accounts</div>
                  <div className="backup_integrity">
                    <span className="integrity_success" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rowBlock rowError">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">James-PC</span>
                  </div>
                  <div className="backup_group">Finance</div>
                  <div className="backup_integrity">
                    <span className="integrity_error" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p className="attempt_empty" />
                        <p className="attempt_empty" />
                        <p className="attempt_empty" />
                        <p className="attempt_empty" />
                        <p className="attempt_empty" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Error message  */}
                <div className="backup_details">
                  <p className="error_msg_color fs_16">
                    System encountered an error and was unable to complete your
                    request. Try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vmware_table" style={{ display: "none" }}>
          <div className="backupTableWrapper">
            <div className="backupHeader">
              <div className="backup_name">
                <span className="vm_name"> VM Name </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_exsi_type">
                <span className="vm_type"> ESXi / vCenter </span>
                <span className="sort ascend" />
              </div>
              <div className="exsi_vcenter_type">
                <span className="integrity"> Integrity Status </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_lastbkp">
                <span className="lastbkp">Last Backup </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_stoarge">
                <span className="size">Storage </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_attempts">
                <span className="attempts">Last 10 Backup attempts </span>
                <span className="sort ascend" />
              </div>
            </div>
            <div className="backupTablecontainer">
              <div className="rowBlock esxi">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Test-Admin-PC</span>
                  </div>
                  <div className="backup_exsi_type">test-ESXI</div>
                  <div className="backup_integrity">
                    <span className="integrity_success" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backup_details">
                  <p className="warning_msg_color fs_16">
                    System backup completed successfully.
                  </p>
                </div>
              </div>
              <div className="rowBlock rowError esxi">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Daniel-Flin-PC</span>
                  </div>
                  <div className="backup_exsi_type">test-ESXI</div>
                  <div className="backup_integrity">
                    <span className="integrity_error" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backup_details">
                  <p className="error_msg_color fs_16">
                    System encountered an error and was unable to complete your
                    request. Try again.
                  </p>
                </div>
              </div>
              <div className="rowBlock vcenter">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Michael-Jordan-PC</span>
                  </div>
                  <div className="backup_exsi_type">test-Vcenter</div>
                  <div className="backup_integrity">
                    <span className="integrity_success" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nas_table" style={{ display: "none" }}>
          <div className="backupTableWrapper">
            <div className="backupHeader">
              <div className="backup_name">
                <span className="share_name">Share Name </span>
                <span className="sort ascend" />
              </div>
              <div className="share_type">
                <span className="share_types">Share Type </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_integrity">
                <span className="integrity">Integrity Status </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_lastbkp">
                <span className="lastbkp">Last Backup </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_size">
                <span className="size">Size </span>
                <span className="sort ascend" />
              </div>
              <div className="backup_attempts">
                <span className="attempts">Last 10 Backup attempts </span>
                <span className="sort ascend" />
              </div>
            </div>
            <div className="backupTablecontainer">
              <div className="rowBlock nas">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Test-Admin-PC</span>
                  </div>
                  <div className="share_type">NAS</div>
                  <div className="backup_integrity">
                    <span className="integrity_success" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backup_details">
                  <p className="warning_msg_color fs_16">
                    System backup completed successfully.
                  </p>
                </div>
              </div>
              <div className="rowBlock rowError iscsi">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Daniel-Flin-PC</span>
                  </div>
                  <div className="share_type">iSCSI</div>
                  <div className="backup_integrity">
                    <span className="integrity_error" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backup_details">
                  <p className="error_msg_color fs_16">
                    System encountered an error and was unable to complete your
                    request. Try again.
                  </p>
                </div>
              </div>
              <div className="rowBlock nas">
                <div className="backup_rows">
                  <div className="backup_name">
                    <span className="pc_icon">
                      <i />
                    </span>
                    <span className="name">Michael-Jordan-PC</span>
                  </div>
                  <div className="share_type">NAS</div>
                  <div className="backup_integrity">
                    <span className="integrity_success" />
                  </div>
                  <div className="backup_lastbkp">Mar 16 2019, 04:33 AM</div>
                  <div className="backup_size">60.70 GB</div>
                  <div className="backup_attempts">
                    <div className="backup_rounds">
                      <div className="line" />
                      <div>
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_err"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Failed"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                        <p
                          className="attempt_succ"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Success"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  </div>
  <div className="rhsContainer">
    <ul className="lower_menu_container mb-10">
      <li className="li_icon settings_li">
        <a
          href="settings.html"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="Settings"
          aria-current="page"
          className="active"
        >
          <span className="lhs_icon" />
        </a>
      </li>
      <li className="li_icon statistics_li">
        <a
          href="/"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="Statistics"
        >
          <span className="lhs_icon" />
        </a>
      </li>
      <li className="li_icon iso_li">
        <a
          href="/"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="ISO"
        >
          <span className="lhs_icon" />
        </a>
      </li>
      <li className="li_icon help_li">
        <a
          href="/"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="Help"
        >
          <span className="lhs_icon" />
        </a>
      </li>
    </ul>
    <ul className="lower_menu_container mt-10">
      <li className="li_icon firewall_li">
        <a
          href="/"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="Firewall Settings"
          aria-current="page"
        >
          <span className="lhs_icon" />
        </a>
      </li>
      <li className="li_icon cleanup_li">
        <a
          href="/"
          data-toggle="tooltip"
          data-placement="left"
          data-original-title="Cleanup Settings"
        >
          <span className="lhs_icon" />
        </a>
      </li>
    </ul>
  </div>
</div>

     </Layout>
    );
  };

export default Dashboard;
