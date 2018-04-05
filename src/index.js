import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

  import StorePicker from './components/StorePicker';
  import App from './components/App';
  import NotFound from './components/NotFound';

  const Router = () => (
    <BrowserRouter basename="/catch-of-the-day/">
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );


  render(<Router />, document.querySelector("#main"));

