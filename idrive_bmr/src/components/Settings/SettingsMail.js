import React from 'react'
import Layout from '../Layout/Layout'
class SettingsMail extends React.Component {
    render() {
        return (
            <Layout>
                <React.Fragment>

                    <section className="container rhs_tab_sec">
                        <div>
                            <div className="main_section">
                                <div className="page__tilte_heading">
                                    <div className="tilte__head">
                                        <div className="breadcrumb"><span className="flow">Settings <i className="fa fa-angle-right" /></span> <span className="active">Mail</span></div>
                                    </div>
                                    <div className="ip_wrap"> <span className="ip_title">Server IP : </span><span className="local_ip">192.168.3.41</span> </div>
                                </div>
                            </div>
                            <div className="body-content">

                                <div className="common__box__shadow">
                                    <div id="mail_setting__wrap">
                                        <div className="box__tabs">
                                            <div className="box__inner__tabs mail__tabs">
                                                <ul>
                                                    <li className="active" id="mail-server-tab">Mail Server Settings</li>
                                                    <li id="email-notify-tab">Local Email Notification</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="box__inner_body">
                                            <form>
                                                <div className="form-main-wrap">
                                                    <div className="mail-setting-container">
                                                        <div className="mail__form__wrap">
                                                            <div className="input__wrap">
                                                                <label>Mail Relay Server</label>
                                                                <div className="select-box-wrap">
                                                                    <div className="select-box">
                                                                        <select>
                                                                            <option>Localhost - via Amazon SES</option>
                                                                            <option>User Defined SMTP</option>
                                                                            <option>Local Relay Server</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Mail Server Name <span className="color-red">*</span></label>
                                                                <input type="text" name defaultValue className="txtBox" placeholder="Localhost" disabled />
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Mail Server Port <span className="color-red">*</span></label>
                                                                <div className="inp-block-wrap">
                                                                    <input type="text" name defaultValue className="txtBox" />
                                                                    <input type="button" name defaultValue="Check Firewall Now" className="check__firewal__cta" />
                                                                    <span className="firewall-loader" /> <span className="firewall_success" /> <span className="err_msg" style={{ display: 'block' }}><span className="err_icon" />The error message goes here...</span> </div>
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Mail Server Username (Empty for none)</label>
                                                                <div className="inp-block-wrap">
                                                                    <input type="text" name defaultValue className="txtBox" />
                                                                    <span className="err_msg"><span className="err_icon" />The error message goes here...</span> </div>
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Mail Server Password</label>
                                                                <div className="inp-block-wrap">
                                                                    <input type="text" name defaultValue className="txtBox" />
                                                                    <span className="err_msg"><span className="err_icon" />The error message goes here...</span> </div>
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Sender E-Mail Address <span className="color-red">*</span></label>
                                                                <input type="text" name defaultValue className="txtBox" placeholder="bmr_admin@idrive.com" disabled />
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Send Mails Only With SSL/TLS </label>
                                                                <div className="custom-checkbox">
                                                                    <div className="checkBox-col">
                                                                        <input className="rec-check" type="checkbox" id />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Check SSL/TLS Certificate</label>
                                                                <div className="custom-checkbox">
                                                                    <div className="checkBox-col">
                                                                        <input className="rec-check" type="checkbox" id />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="input__wrap">
                                                                <label>Send test mail to this email address after saving the settings (Leave empty to not send a test mail)</label>
                                                                <div className="inp-block-wrap">
                                                                    <input type="text" name defaultValue className="txtBox" />
                                                                    <span className="err_msg"><span className="err_icon" />The error message goes here...</span> </div>
                                                            </div>
                                                            <div className="form_footer">
                                                                <input type="submit" defaultValue="Save" name className="save-cta" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="email-notify-container" style={{ display: 'none' }}>
                                                        <div className="notifyEmail__form__wrap">
                                                            <h2>Server Alert Notification</h2>
                                                            <div className="notify__group">
                                                                <p>Notifications regarding BMR server will be sent to this email address.</p>
                                                                <div className="input__wrap">
                                                                    <label>Admin Email (Primary)</label>
                                                                    <div className="add__email__field">
                                                                        <input type="text" name defaultValue="admin@gmail.com" className="txtBox disable-enable-toggle" disabled />
                                                                        <i className="fa fa-pencil" aria-hidden="true" /> </div>
                                                                    <input type="submit" defaultValue="Save" name className="save-cta" />
                                                                </div>
                                                            </div>
                                                            <div className="notify__group">
                                                                <p>Add additional email addresses to get the BMR server notification.</p>
                                                                <div className="input__wrap">
                                                                    <label>Additional Email:</label>
                                                                    <div className="add__email__field">
                                                                        <input type="text" name defaultValue className="txtBox" />
                                                                        <i className="fa fa-plus" aria-hidden="true" /> </div>
                                                                    <input type="submit" defaultValue="Save" name className="save-cta" />
                                                                </div>
                                                                <div className="saved__email__wrap"> <span className="thisEmailDetails"> <span className="thisEmailAddr">sara.streamnet@gmail.com</span> <i className="fa fa-times" aria-hidden="true" /></span> <span className="thisEmailDetails"> <span className="thisEmailAddr">johnwalk@gmail.com</span> <i className="fa fa-times" aria-hidden="true" /></span> <span className="thisEmailDetails"> <span className="thisEmailAddr">raffel.streamnet@gmail.com</span> <i className="fa fa-times" aria-hidden="true" /></span></div>
                                                            </div>
                                                            <h2>Backup Report Notification</h2>
                                                            <div className="notify__group">
                                                                <p>Add email address to send notifications on backup operations such as backup of physical machines, virtual machines and cloud transfer.</p>
                                                                <div className="input__wrap">
                                                                    <label>Additional Email:</label>
                                                                    <div className="add__email__field">
                                                                        <input type="text" name defaultValue className="txtBox" />
                                                                        <i className="fa fa-plus" aria-hidden="true" /> </div>
                                                                    <input type="submit" defaultValue="Save" name className="save-cta" />
                                                                </div>
                                                                <div className="saved__email__wrap"> <span className="thisEmailDetails"> <span className="thisEmailAddr">sara.streamnet@gmail.com</span> <i className="fa fa-times" aria-hidden="true" /></span> <span className="thisEmailDetails"> <span className="thisEmailAddr">johnwalk@gmail.com</span> <i className="fa fa-times" aria-hidden="true" /></span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            </Layout>

        );
    }
}
export default SettingsMail;