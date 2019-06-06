import React from 'react';
// import Login from '../components/Login/Login';

const withAuthenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }
    componentDidMount = () => {
      // console.log(localStorage.getItem('username'));
      const loggedUserName = localStorage.getItem('username');      
      if (loggedUserName !== null) {
        this.setState({
          loggedIn: true
        })
        localStorage.removeItem('username');
      }
      else {
        this.setState({
          loggedIn: false
        })  
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      }
      else {
        return <Login />;
      }
    }
  };

  export default withAuthenticate;