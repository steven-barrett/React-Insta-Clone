import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      login = () => {
        if (this.state.username === '') {
            return;
        }
        localStorage.setItem('username', `${this.state.username}`);
      }
    
    render() {
        return (
            <form className='login-form' onSubmit={this.login}>
            <input className='username-input'
              placeholder='Username'
              value={this.state.item}
              name="username"
              onChange={this.handleChanges}
            />              
            <input className='password-input'
              placeholder='Password'
              value={this.state.item}
              name="password"
              onChange={this.handleChanges}
            />              
            <button onClick={this.login}>Submit</button>
          </form>    
            )
    }
}

export default Login;