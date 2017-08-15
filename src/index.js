import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
// BrowserRouter interacts with History library and decides what to do based on change in the URL
// Route is the real workforce of react router, it's purpose is to decide what to render based on the current URL
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
        <Switch>
          <Route
            path="/posts/new"
            component={PostsNew}/>
            
        	<Route
        		path="/"
        		component={PostsIndex}/>
        </Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
