import React from 'react'
import Layout from '../Layout/Layout';
import BackupPhysicalList from './BackupPhysicalList'
import Activities from './Activities'
import { arrayExpression } from '@babel/types';
class BackupPhysical extends React.Component {
    state = {
        activeClass: false
    }
    toggleActiveClasshandler = e => {
        e.preventDefault();
        this.setState(prevState => {
            return { activeClass: !prevState.activeClass }
        })
    }

    render() {
        return (
            <Layout>
                <section className="container rhs_tab_sec">
                    <div className="main_section">
                        <div className="page__tilte_heading">
                            <div className="tilte__head">Backup</div>
                            <div className="ip_wrap"> <span className="ip_title">Server IP : </span><span className="local_ip">192.168.3.41</span> </div>
                        </div>
                    </div>
                    <section className="body-content">
                        {/* tab section start */}
                        <div className="activities__wrapper">
                            <div className="activities__wrapper__inner">
                                <div className={["activity__content", this.state.activeClass ? "active" : ""].join(" ")} onClick={this.toggleActiveClasshandler}>
                                    <div className="activity__txt">Activities</div>
                                    <div className="backup__progress"><span className="progress__txt">Backup in progress <span className="progress_loader"> <span className="progress_icon" /> <span className="prog_inside_icon backup__icon" /> </span> </span> </div>
                                    <div className="backup__drop"><span className="drop__arrow__wrap"><i className="arrow__indication" /></span></div>
                                </div>
                                <div className={["activities__main__table", this.state.activeClass ? "active" : ""].join(" ")} >
                                    <div className="activities__head__wrap">
                                        <ul className="heading__row">
                                            <li>
                                                <div className="activities__table__col row__one"><span>Hostname</span></div>
                                                <div className="activities__table__col row__two"><span>Action</span></div>
                                                <div className="activities__table__col row__three"><span>Details</span></div>
                                                <div className="activities__table__col row__four"><span>Progress</span></div>
                                                <div className="activities__table__col row__five"><span>ETA</span></div>
                                                <div className="activities__table__col row__six"><span>Speed</span></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="activities__info__wrap" id="activities__info__wrap_scroll">
                                        <ul className="body__row">
                                            <Activities></Activities>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="common__box__shadow">
                                <div id="physical__machine_backup">
                                    <div className="box__tabs">
                                        <div className="box__inner__tabs">
                                            <ul>
                                                <li className="pmachine__esxi__tab active">Clients</li>
                                                <li className="pmachine__vcenter__tab">Groups</li>
                                            </ul>
                                            <div className="sub_tabs_left">
                                                {/* <div class="backup_settings_wrap"><i class="icon"></i>Backup Settings</div> */}
                                                <div className="server_settings_wrap"><i className="icon custom__hover" /></div>
                                                <div className="client_delete_wrap"><i className="icon custom__hover" /></div>
                                                <div className="search-wrap">
                                                    <input type="search" name="serach" placeholder="Search" className="search-input" />
                                                </div>
                                                <div className="add_client_btn"> <i className="add_client_icon custom__hover" /> <a href="#" /> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box__inner_body">
                                        <div id="physical__machine__body">
                                            <div className="physical__machine_hosts">
                                                <ul className="clients_main_wrap">
                                                    {/* {
                                                    array.map((client) => {
                                                        <BackupPhysicalList client={client}>

                                                        </BackupPhysicalList>
                                                    })
                                                } */}
                                                    <BackupPhysicalList  ></BackupPhysicalList>
                                                </ul>
                                            </div>
                                            <div className="physical__machine_groups">
                                                <ul className="clients_main_wrap">
                                                    <li className="client_info">
                                                        <div className="clients_info_lhs">
                                                            <div className="checkBox-col">
                                                                <input className="rec-check" type="checkbox" id />
                                                            </div>
                                                            <div className="client_status_wrap">
                                                                <div className="status_icon_wrap"> <span className="status_icon online" /> </div>
                                                                <div className="client_details">
                                                                    <div className="group-name-wrap "> <span className="group-name">Management</span><span className="host_count_wrap"><span className="host_count">23</span> Hosts</span> </div>
                                                                    <div className="status-bar-wrap">
                                                                        <div className="status-bar"> <span className="status-bar-fill" style={{ width: '10%' }} /> </div>
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
                                                                    <div className="title_txt">Backup Interval</div>
                                                                    <div className="bck_interval_icon" />
                                                                    <div className="interval_days"> <span className="days_count">90 </span> <span className="days_txt">Days</span> </div>
                                                                </div>
                                                                <div className="info_wrap_rhs">
                                                                    <div className="title_txt">Number of image backups</div>
                                                                    <div className="image_backup_count_wrap">
                                                                        <div className="image_backup_count"><span className="image_bkp_min_count">1</span>
                                                                            <p className="min_txt">min</p>
                                                                            <span className="image_bkp_max_count">5</span>
                                                                            <p className="max_txt">max</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="intigrity_txt_wrap">
                                                                <div className="inte_info_wrap">
                                                                    <div className="title_txt">Backup Interval</div>
                                                                    <div className="add_clnt_togrp_icon_wrap"> <span className="add_clnt_togrp_icon" /> </div>
                                                                    <div className="add_clnt_togrp_btn_wrap">
                                                                        <div className="add_clnt_togrp_btn">Add Client machine</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="more_action_wrap"> <span className="action_bar">...</span>
                                                                <div className="more_opt_popup" style={{ left: '-144px', top: 88 }}> <span className="corner_span" />
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
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div></section>
                </section>
            </Layout>
        );
    }
}
export default BackupPhysical;