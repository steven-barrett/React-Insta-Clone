import React from 'react';

// import { Form, Input, Button } from 'reactstrap';
import styled, { css } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Login.css';

const Wrapper = styled.div`
display: block;
padding: 4em;
`;        
const H1 = styled.h1`
`;
const Form = styled.form`
display: flex;
width: 100%;

`;        
const Input = styled.input`
`;
const Button = styled.button`          
`;

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
          <Wrapper className='wrapper-div'>
            <H1 className='h1-login'>Instagram</H1>
            <Form  className='form-input' onNativeSubmit={this.login}>
              <Input 
                className='username-input'
                placeholder='Username'
                value={this.state.username}
                name="username"
                onChange={this.handleChanges}            
              />              
              <Input className='password-input'
                placeholder='Password'
                value={this.state.password}
                name="password"
                onChange={this.handleChanges}
              />              
              <Button onClick={this.login}>Submit</Button>
              </Form>
          </Wrapper>    
            )
    }
}

export default Login;