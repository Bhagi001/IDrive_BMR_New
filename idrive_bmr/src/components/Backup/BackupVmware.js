import React from 'react'
import Layout from '../Layout/Layout';

class BackupVmare extends React.Component {
    render() {
        return (
            <Layout>
<section className="container rhs_tab_sec ">
  <div className="main_section">
    <div className="page__tilte_heading">
      <div className="tilte__head">
        <div className="breadcrumb"><span className="flow">VMware <i className="fa fa-angle-right" /></span> <span className="active">Backup</span></div>
      </div>
      <div className="ip_wrap"> <span className="ip_title">Server IP : </span><span className="local_ip">192.168.3.41</span> </div>
    </div>
  </div>
  <section className="body-content"> 
    {/* tab section start */}
    <div className="common__box__shadow">
      <div id="vmware_backup">
        <div className="box__tabs">
          <div className="box__inner__tabs">
            <ul>
              <li className="vmware__esxi__tab ">ESXi</li>
              <li className="vmware__vcenter__tab active">vCenter</li>
            </ul>
            <div className="sub_tabs_left">
              <div className="search-wrap">
                <input type="search" name="serach" placeholder="Search" className="search-input" />
              </div>
              <div className="add_client_btn"> <i className="add_client_icon" /> <a href="#" /> </div>
            </div>
          </div>
        </div>
        {/* inside box */}
        <div className="box__inner_body">
          <div id="vmware__body">
            <div className="vmware__esxi_sec" style={{display: 'none'}}>
              <ul className="clients_main_wrap">
                <li className="client_info">
                  <div className="clients_info_lhs">
                    <div className="checkBox-col">
                      <input className="rec-check" type="checkbox" id />
                    </div>
                    <div className="client_status_wrap">
                      <div className="status_icon_wrap"> <span className="status_icon online" /> </div>
                      <div className="client_details">
                        <div className="pc-name-wrap"> <span className="pc-name">John-PC</span> <span className="esxi_vms_count_wrap"> <span className="vms_count_wrap"><span className="vms_count">40</span> VMs</span> </span> </div>
                        <div className="status-bar-wrap">
                          <div className="status-bar"> <span className="status-bar-fill" style={{width: '10%'}} /> </div>
                        </div>
                        <div className="status-txt-wrap"> <span className="status-txt">Status : <span className="online">Online</span></span> </div>
                      </div>
                    </div>
                    <div className="backup_btn_wrap">
                      <div className="bkp_btn"><i className="bkp_icon" /><a href="#">Backup Now</a></div>
                      <div className="full_bkp_btn">
                        <div className="checkBox-col">
                          <input className="rec-check" type="checkbox" id />
                        </div>
                        <span className="full__backup__text">Full image Backup</span></div>
                    </div>
                  </div>
                  <div className="clients_info_rhs">
                    <div className="bkp_info_txt_wrap"> 
                      {/*  <div class="info_title_wrap"><span class="info_title_txt">Information</span></div> */}
                      <div className="info_wrap_lhs">
                        <div className="center__cont">
                          <div className="ip_info_wrap"><span className="ip_info_title">IP Address <span className="colon">:</span> <span className="ip_address">192.168.3.41</span></span></div>
                          <div className="bkp_info_wrap"><span className="bkp_info_title">Backup Interval <span className="colon">:</span> <span className="bkp_int_txt">67</span><span> Days</span></span></div>
                        </div>
                      </div>
                      <div className="info_wrap_rhs">
                        <div className="edit_scheduler_icon_wrap"> <span className="edit_scheduler_icon" /> </div>
                        <div className="edit_scheduler_btn_wrap">
                          <div className="edit_scheduler_btn">Edit Scheduler</div>
                        </div>
                      </div>
                    </div>
                    <div className="intigrity_txt_wrap">
                      <div className="inte_info_wrap">
                        <div className="add_clnt_togrp_icon_wrap"> <span className="add_clnt_togrp_icon" /> </div>
                        <div className="add_clnt_togrp_btn_wrap">
                          <div className="add_clnt_togrp_btn">Add Client machine</div>
                        </div>
                      </div>
                    </div>
                    <div className="more_action_wrap "> <span className="action_bar">...</span>
                      <div className="more_opt_popup" style={{left: '-144px', top: 88}}> <span className="corner_span" />
                        <ul className="more_opt_popup_inner" role="menu" style={{}}>
                          <li className="first_child"><a><span className="txt">Add to Group</span><span className="icon" /></a></li>
                          <li className="second_child active"><a><span className="txt">Schedule Settings</span><span className="icon" /></a></li>
                          <li className="third_child"><a><span className="txt">View Recovery Points</span><span className="icon" /></a></li>
                          <li className="fourth_child"><a><span className="txt">Remove Host</span><span className="icon" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* client info repeat start */}
                <li className="client_info">
                  <div className="clients_info_lhs">
                    <div className="checkBox-col">
                      <input className="rec-check" type="checkbox" id />
                    </div>
                    <div className="client_status_wrap">
                      <div className="status_icon_wrap"> <span className="status_icon offline" /> </div>
                      <div className="client_details">
                        <div className="pc-name-wrap"> <span className="pc-name">John-PC</span> <span className="esxi_vms_count_wrap"> <span className="vms_count_wrap"><span className="vms_count">40</span> VMs</span> </span> </div>
                        <div className="status-bar-wrap">
                          <div className="status-bar"> <span className="status-bar-fill" style={{width: '20%'}} /> </div>
                        </div>
                        <div className="status-txt-wrap"> <span className="status-txt">Status : <span className="offline">Offline</span></span> </div>
                      </div>
                    </div>
                    <div className="backup_btn_wrap">
                      <div className="bkp_btn"><i className="bkp_icon" /><a href="#">Backup Now</a></div>
                      <div className="full_bkp_btn">
                        <div className="checkBox-col">
                          <input className="rec-check" type="checkbox" id />
                        </div>
                        <span className="full__backup__text">Full image Backup</span></div>
                    </div>
                  </div>
                  <div className="clients_info_rhs">
                    <div className="bkp_info_txt_wrap">
                      <div className="info_title_wrap"><span className="info_title_txt">Information</span></div>
                      <div className="info_wrap_lhs">
                        <div className="ip_info_wrap"><span className="ip_info_title">IP Address <span className="colon">:</span> <span className="ip_address">192.168.3.41</span></span></div>
                        <div className="os_ver_wrap"><span className="os_info_title">OS Version <span className="colon">:</span> <span className="os_ver">Windows 10</span></span></div>
                      </div>
                      <div className="info_wrap_rhs">
                        <div className="last_seen_info_wrap"><span className="last_seen_info_title">Last seen <span className="colon">:</span> <span className="last_seen"><span className="date">30/08/2018 </span><span className="time">11:25</span></span></span></div>
                        <div className="last_bkp_wrap"><span className="bkp_info_title">Last backup <span className="colon">:</span> <span className="last_bkp"><span className="date">11/02/2018 </span><span className="time">11:22</span></span></span></div>
                      </div>
                    </div>
                    <div className="intigrity_txt_wrap">
                      <div className="inte_title_wrap"><span className="inte_title_txt">Integrity</span></div>
                      <div className="inte_info_wrap">
                        <div className="file_restore_info_wrap"><span className="restore_title">File Level Restore </span><span className="restore_status error" /></div>
                        <div className="virt_info_wrap"><span className="virt_title">Virtualization</span> <span className="virt_status error" /></div>
                      </div>
                    </div>
                    <div className="more_action_wrap "> <span className="action_bar">...</span>
                      <div className="more_opt_popup" style={{left: '-144px', top: 88}}> <span className="corner_span" />
                        <ul className="more_opt_popup_inner" role="menu" style={{}}>
                          <li className="first_child"><a><span className="txt">Add to Group</span><span className="icon" /></a></li>
                          <li className="second_child active"><a><span className="txt">Schedule Settings</span><span className="icon" /></a></li>
                          <li className="third_child"><a><span className="txt">View Recovery Points</span><span className="icon" /></a></li>
                          <li className="fourth_child"><a><span className="txt">Remove Host</span><span className="icon" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="client_info">
                  <div className="clients_info_lhs">
                    <div className="checkBox-col">
                      <input className="rec-check" type="checkbox" id />
                    </div>
                    <div className="client_status_wrap">
                      <div className="status_icon_wrap"> <span className="status_icon online" /> </div>
                      <div className="client_details">
                        <div className="pc-name-wrap"> <span className="pc-name">John-PC</span> <span className="esxi_vms_count_wrap"> <span className="vms_count_wrap"><span className="vms_count">40</span> VMs</span> </span></div>
                        <div className="status-bar-wrap">
                          <div className="status-bar"> <span className="status-bar-fill" style={{width: '10%'}} /> </div>
                        </div>
                        <div className="status-txt-wrap"> <span className="status-txt">Status : <span className="online">Online</span></span> </div>
                      </div>
                    </div>
                    <div className="backup_btn_wrap">
                      <div className="bkp_btn"><i className="bkp_icon" /><a href="#">Backup Now</a></div>
                      <div className="full_bkp_btn">
                        <div className="checkBox-col">
                          <input className="rec-check" type="checkbox" id />
                        </div>
                        <span className="full__backup__text">Full image Backup</span></div>
                    </div>
                  </div>
                  <div className="clients_info_rhs">
                    <div className="bkp_info_txt_wrap">
                      <div className="info_title_wrap"><span className="info_title_txt">Information</span></div>
                      <div className="info_wrap_lhs">
                        <div className="ip_info_wrap"><span className="ip_info_title">IP Address <span className="colon">:</span> <span className="ip_address">192.168.3.41</span></span></div>
                        <div className="os_ver_wrap"><span className="os_info_title">OS Version <span className="colon">:</span> <span className="os_ver">Windows 10</span></span></div>
                      </div>
                      <div className="info_wrap_rhs">
                        <div className="last_seen_info_wrap"><span className="last_seen_info_title">Last seen <span className="colon">:</span> <span className="last_seen"><span className="date">30/08/2018 </span><span className="time">11:25</span></span></span></div>
                        <div className="last_bkp_wrap"><span className="bkp_info_title">Last backup <span className="colon">:</span> <span className="last_bkp"><span className="date">11/02/2018 </span><span className="time">11:22</span></span></span></div>
                      </div>
                    </div>
                    <div className="intigrity_txt_wrap">
                      <div className="inte_title_wrap"><span className="inte_title_txt">Integrity</span></div>
                      <div className="inte_info_wrap">
                        <div className="file_restore_info_wrap"><span className="restore_title">File Level Restore </span><span className="restore_status" /></div>
                        <div className="virt_info_wrap"><span className="virt_title">Virtualization</span> <span className="virt_status" /></div>
                      </div>
                    </div>
                    <div className="more_action_wrap "> <span className="action_bar">...</span>
                      <div className="more_opt_popup" style={{left: '-144px', top: 88}}> <span className="corner_span" />
                        <ul className="more_opt_popup_inner" role="menu" style={{}}>
                          <li className="first_child"><a><span className="txt">Add to Group</span><span className="icon" /></a></li>
                          <li className="second_child active"><a><span className="txt">Schedule Settings</span><span className="icon" /></a></li>
                          <li className="third_child"><a><span className="txt">View Recovery Points</span><span className="icon" /></a></li>
                          <li className="fourth_child"><a><span className="txt">Remove Host</span><span className="icon" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="client_info">
                  <div className="clients_info_lhs">
                    <div className="checkBox-col">
                      <input className="rec-check" type="checkbox" id />
                    </div>
                    <div className="client_status_wrap">
                      <div className="status_icon_wrap"> <span className="status_icon online" /> </div>
                      <div className="client_details">
                        <div className="pc-name-wrap"> <span className="pc-name">John-PC</span> <span className="esxi_vms_count_wrap"> <span className="vms_count_wrap"><span className="vms_count">40</span> VMs</span> </span></div>
                        <div className="status-bar-wrap">
                          <div className="status-bar"> <span className="status-bar-fill" style={{width: '10%'}} /> </div>
                        </div>
                        <div className="status-txt-wrap"> <span className="status-txt">Status : <span className="online">Online</span></span> </div>
                      </div>
                    </div>
                    <div className="backup_btn_wrap">
                      <div className="bkp_btn"><i className="bkp_icon" /><a href="#">Backup Now</a></div>
                      <div className="full_bkp_btn">
                        <div className="checkBox-col">
                          <input className="rec-check" type="checkbox" id />
                        </div>
                        <span className="full__backup__text">Full image Backup</span></div>
                    </div>
                  </div>
                  <div className="clients_info_rhs">
                    <div className="bkp_info_txt_wrap">
                      <div className="info_title_wrap"><span className="info_title_txt">Information</span></div>
                      <div className="info_wrap_lhs">
                        <div className="ip_info_wrap"><span className="ip_info_title">IP Address <span className="colon">:</span> <span className="ip_address">192.168.3.41</span></span></div>
                        <div className="os_ver_wrap"><span className="os_info_title">OS Version <span className="colon">:</span> <span className="os_ver">Windows 10</span></span></div>
                      </div>
                      <div className="info_wrap_rhs">
                        <div className="last_seen_info_wrap"><span className="last_seen_info_title">Last seen <span className="colon">:</span> <span className="last_seen"><span className="date">30/08/2018 </span><span className="time">11:25</span></span></span></div>
                        <div className="last_bkp_wrap"><span className="bkp_info_title">Last backup <span className="colon">:</span> <span className="last_bkp"><span className="date">11/02/2018 </span><span className="time">11:22</span></span></span></div>
                      </div>
                    </div>
                    <div className="intigrity_txt_wrap">
                      <div className="inte_title_wrap"><span className="inte_title_txt">Integrity</span></div>
                      <div className="inte_info_wrap">
                        <div className="file_restore_info_wrap"><span className="restore_title">File Level Restore </span><span className="restore_status" /></div>
                        <div className="virt_info_wrap"><span className="virt_title">Virtualization</span> <span className="virt_status" /></div>
                      </div>
                    </div>
                    <div className="more_action_wrap "> <span className="action_bar">...</span>
                      <div className="more_opt_popup" style={{left: '-144px', top: 88}}> <span className="corner_span" />
                        <ul className="more_opt_popup_inner" role="menu" style={{}}>
                          <li className="first_child"><a><span className="txt">Add to Group</span><span className="icon" /></a></li>
                          <li className="second_child active"><a><span className="txt">Schedule Settings</span><span className="icon" /></a></li>
                          <li className="third_child"><a><span className="txt">View Recovery Points</span><span className="icon" /></a></li>
                          <li className="fourth_child"><a><span className="txt">Remove Host</span><span className="icon" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* client info repeat end */}
              </ul>
            </div>
            <div className="vmware__vcenter_sec" style={{display: 'none'}}>
              <ul className="clients_main_wrap">
                <li className="client_info">
                  <div className="clients_info_lhs">
                    <div className="checkBox-col">
                      <input className="rec-check" type="checkbox" id />
                    </div>
                    <div className="client_status_wrap">
                      <div className="status_icon_wrap"> <span className="status_icon online" /> </div>
                      <div className="client_details">
                        <div className="group-name-wrap "> <span className="group-name">Management</span> <span className="esxi_vms_count_wrap"> <span className="esxi_count_wrap"><span className="esxi_count">23</span> ESXi</span> <span className="vms_count_wrap"><span className="vms_count">40</span> VMs</span> </span> </div>
                        <div className="status-bar-wrap">
                          <div className="status-bar"> <span className="status-bar-fill" style={{width: '10%'}} /> </div>
                          <div className="status-txt-wrap"> <span className="stored-txt">Data stored : <span className="data_count">300 </span><span className="data_unit">GB</span></span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="backup_btn_wrap">
                      <div className="bkp_btn"><i className="bkp_icon" /><a href="#">Backup Now</a></div>
                      <div className="full_bkp_btn">
                        <div className="checkBox-col">
                          <input className="rec-check" type="checkbox" id />
                        </div>
                        <span className="full__backup__text">Full image Backup</span></div>
                    </div>
                  </div>
                  <div className="clients_info_rhs">
                    <div className="bkp_info_txt_wrap">
                      <div className="info_wrap_lhs"> 
                        {/* <div class="title_txt">Backup Interval</div>
                    <div class="bck_interval_icon"></div>
                    <div class="interval_days"> <span class="days_count">90 </span> <span class="days_txt">Days</span> </div> */}
                        <div className="center__cont">
                          <div className="ip_info_wrap"><span className="ip_info_title">IP Address <span className="colon">:</span> <span className="ip_address">192.168.3.41</span></span></div>
                          <div className="bkp_info_wrap"><span className="bkp_info_title">Backup Interval <span className="colon">:</span> <span className="bkp_int_txt">67</span><span> Days</span></span></div>
                        </div>
                      </div>
                      <div className="info_wrap_rhs"> 
                        {/* <div class="title_txt">Number of image backups</div>
                    <div class="image_backup_count_wrap">
                      <div class="image_backup_count"><span class="image_bkp_min_count">1</span>
                        <p class="min_txt">min</p>
                        <span class="image_bkp_max_count">5</span>
                        <p class="max_txt">max</p>
                      </div>
                    </div> */}
                        <div className="edit_scheduler_icon_wrap"> <span className="edit_scheduler_icon" /> </div>
                        <div className="edit_scheduler_btn_wrap">
                          <div className="edit_scheduler_btn">Edit Scheduler</div>
                        </div>
                      </div>
                    </div>
                    <div className="intigrity_txt_wrap">
                      <div className="inte_info_wrap"> 
                        {/* <div class="title_txt">Backup Interval</div> */}
                        <div className="add_clnt_togrp_icon_wrap"> <span className="add_clnt_togrp_icon" /> </div>
                        <div className="add_clnt_togrp_btn_wrap">
                          <div className="add_clnt_togrp_btn">Add Client machine</div>
                        </div>
                      </div>
                    </div>
                    <div className="more_action_wrap"> <span className="action_bar">...</span>
                      <div className="more_opt_popup" style={{left: '-144px', top: 88}}> <span className="corner_span" />
                        <ul className="more_opt_popup_inner" role="menu" style={{}}>
                          <li className="first_child"><a><span className="txt">Rename</span><span className="icon" /></a></li>
                          <li className="second_child active"><a><span className="txt">Edit</span><span className="icon" /></a></li>
                          <li className="third_child"><a><span className="txt">Settings</span><span className="icon" /></a></li>
                          <li className="fourth_child"><a><span className="txt">Delete</span><span className="icon" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* repeat */}
                <li className="client_info">
                  <div className="clients_info_lhs">
                    <div className="checkBox-col">
                      <input className="rec-check" type="checkbox" id />
                    </div>
                    <div className="client_status_wrap">
                      <div className="status_icon_wrap"> <span className="status_icon online" /> </div>
                      <div className="client_details">
                        <div className="group-name-wrap "> <span className="group-name">Management</span> <span className="esxi_vms_count_wrap"> <span className="esxi_count_wrap"><span className="esxi_count">23</span> ESXi</span> <span className="vms_count_wrap"><span className="vms_count">40</span> VMs</span> </span> </div>
                        <div className="status-bar-wrap">
                          <div className="status-bar"> <span className="status-bar-fill" style={{width: '10%'}} /> </div>
                          <div className="status-txt-wrap"> <span className="stored-txt">Data stored : <span className="data_count">300 </span><span className="data_unit">GB</span></span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="backup_btn_wrap">
                      <div className="bkp_btn"><i className="bkp_icon" /><a href="#">Backup Now</a></div>
                      <div className="full_bkp_btn">
                        <div className="checkBox-col">
                          <input className="rec-check" type="checkbox" id />
                        </div>
                        <span className="full__backup__text">Full image Backup</span></div>
                    </div>
                  </div>
                  <div className="clients_info_rhs">
                    <div className="bkp_info_txt_wrap">
                      <div className="info_wrap_lhs"> 
                        {/* <div class="title_txt">Backup Interval</div>
                    <div class="bck_interval_icon"></div>
                    <div class="interval_days"> <span class="days_count">90 </span> <span class="days_txt">Days</span> </div> */}
                        <div className="center__cont">
                          <div className="ip_info_wrap"><span className="ip_info_title">IP Address <span className="colon">:</span> <span className="ip_address">192.168.3.41</span></span></div>
                          <div className="bkp_info_wrap"><span className="bkp_info_title">Backup Interval <span className="colon">:</span> <span className="bkp_int_txt">67</span><span> Days</span></span></div>
                        </div>
                      </div>
                      <div className="info_wrap_rhs"> 
                        {/* <div class="title_txt">Number of image backups</div>
                    <div class="image_backup_count_wrap">
                      <div class="image_backup_count"><span class="image_bkp_min_count">1</span>
                        <p class="min_txt">min</p>
                        <span class="image_bkp_max_count">5</span>
                        <p class="max_txt">max</p>
                      </div>
                    </div> */}
                        <div className="edit_scheduler_icon_wrap"> <span className="edit_scheduler_icon" /> </div>
                        <div className="edit_scheduler_btn_wrap">
                          <div className="edit_scheduler_btn">Edit Scheduler</div>
                        </div>
                      </div>
                    </div>
                    <div className="intigrity_txt_wrap">
                      <div className="inte_info_wrap"> 
                        {/* <div class="title_txt">Backup Interval</div> */}
                        <div className="add_clnt_togrp_icon_wrap"> <span className="add_clnt_togrp_icon" /> </div>
                        <div className="add_clnt_togrp_btn_wrap">
                          <div className="add_clnt_togrp_btn">Add Client machine</div>
                        </div>
                      </div>
                    </div>
                    <div className="more_action_wrap"> <span className="action_bar">...</span>
                      <div className="more_opt_popup" style={{left: '-144px', top: 88}}> <span className="corner_span" />
                        <ul className="more_opt_popup_inner" role="menu" style={{}}>
                          <li className="first_child"><a><span className="txt">Rename</span><span className="icon" /></a></li>
                          <li className="second_child active"><a><span className="txt">Edit</span><span className="icon" /></a></li>
                          <li className="third_child"><a><span className="txt">Settings</span><span className="icon" /></a></li>
                          <li className="fourth_child"><a><span className="txt">Delete</span><span className="icon" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* repeat end */}
              </ul>
            </div>
            {/* add esxi screen start*/}
            <div className="center__wrap esxi"> <span className="welcome_txt">Welcome to <span>ESXi Host</span></span>
              <div className="icon" />
              <p className="information__pera">Protect your hypervisor environment with IDrive BMR. Backup all your virtual machines at the hypervisor level without </p>
              <div className="add__btn__wrap"> <span className="icon" /> <span className="add__txt">Add ESXi Host</span> </div>
            </div>
            {/* add esxi screen end */} 
            {/* add vcenter screen start*/}
            <div className="center__wrap vcenter"> <span className="welcome_txt">Welcome to <span>vCenter Server</span></span>
              <div className="icon" />
              <p className="information__pera">Protect your hypervisor environment with IDrive BMR. Backup all your virtual machines at the hypervisor level without </p>
              <div className="add__btn__wrap"> <span className="icon" /> <span className="add__txt">Add vCenter</span> </div>
            </div>
            {/* add vcenter screen end */} 
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

            </Layout>
        );
    }
}
export default BackupVmare;