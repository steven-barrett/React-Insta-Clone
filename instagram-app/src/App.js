import React from 'react';

import withAuthenticate from './authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';

import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  constructor() {
    super();
  }

  render () {    
    return (
      <ComponentFromWithAuthenticate />
    );
}
}

export default App;
