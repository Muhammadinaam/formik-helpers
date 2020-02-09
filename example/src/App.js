import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import JsonSchemaFieldsAllDemo from './pages/JsonSchemaFieldsAllDemo';
import MainNavbar from './components/MainNavbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavbar />
        <Switch>
          <Route path="/json-schema-fields-all-demo" component={JsonSchemaFieldsAllDemo} />
          <Route path="/" component={Home} />
        </Switch>

      </BrowserRouter>
    )
  }
}
