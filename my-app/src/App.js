import { BigCommunity } from './Big-community';
import { JoinUsSection } from './Join-us-section';
import { NotFound } from './NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

export function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <BigCommunity />
        <JoinUsSection />
      </Route>
      <Route path='/community'>
        <BigCommunity />
      </Route>
      <Route path='/not-found'>
        <NotFound />
      </Route>
      <Redirect from='*' to='/not-found' />
    </Switch>
  );
}


