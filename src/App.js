import HeaderComponent from './components/Header';
import MainpageComponent from './components/Mainpage';
import ContactsComponent from './components/Contacts';
import { Switch, Route } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    localStorage.setItem('active', '0');
  }

  render () {
    return (
      <div className="container-fluid px-0">
        <HeaderComponent />
        <Switch>
          <Route exact path='/'>
            <MainpageComponent />
          </Route>
          <Route path='/contacts'>
            <ContactsComponent />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
