import React from 'react';
//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'


import './App.css';



import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import BackupPhysical from './components/Backup/BackupPhysical'
import BackupVmware from './components/Backup/BackupVmware'
import SettingsMail from './components/Settings/SettingsMail';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>

          <Route path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/backup-physical' component={BackupPhysical}></Route>
          <Route exact path='/backup-vmware' component={BackupVmware}></Route>
          <Route exact path='/settings-mail' component={SettingsMail}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}
export default App; 