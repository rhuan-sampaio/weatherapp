import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import MusicList from '../pages/MusicList/index';
import ListContent from '../components/ListContent';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/list" component={MusicList} />
        <Route exact path="/listcontent" component={ListContent} />
      </Switch>
    </Router>
  );
}
