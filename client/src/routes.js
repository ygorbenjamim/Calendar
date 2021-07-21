import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import MonthsOfTheYaer from './pages/MonthsOfTheYaer';
import January from './pages/January';
import February from './pages/February';
import March from './pages/March';
import April from './pages/April';
import May from './pages/May';
import June from './pages/June';
import July from './pages/July';
import August from './pages/August';
import September from './pages/September';
import October from './pages/October';
import November from './pages/November';
import December from './pages/December';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/monthsoftheyaer" exact component={ MonthsOfTheYaer } />
        <Route path="/january" exact component={ January } />
        <Route path="/february" exact component={ February } />
        <Route path="/march" exact component={ March } />
        <Route path="/april" exact component={ April } />
        <Route path="/may" exact component={ May } />
        <Route path="/june" exact component={ June } />
        <Route path="/july" exact component={ July } />
        <Route path="/august" exact component={ August } />
        <Route path="/september" exact component={ September } />
        <Route path="/october" exact component={ October } />
        <Route path="/november" exact component={ November } />
        <Route path="/december" exact component={ December } />
      </Switch>
    </BrowserRouter>
  );
}