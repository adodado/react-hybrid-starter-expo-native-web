import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Switch, Route } from './routing';
import MainPage from './pages/mainPage';
import ExamplePage from './pages/examplePage';

class App extends Component {
  render() {
    return (
      <View>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <MainPage {...props} />} />
            <Route path="/example" render={props => <ExamplePage {...props} />} />
          </Switch>
        </Router>
      </View>
    );
  }
}

export default App;