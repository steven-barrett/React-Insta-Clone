import React from "react";

import styled from 'styled-components';

// Styled components
const Form = styled.form`
height: 35px;
`;
const Input = styled.input`
`;

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addNewComment = e => {    
    e.preventDefault();
    if (e.target.value === ''){
        return;
    }
    this.props.addNewComment(this.state.item);
    this.setState({
      item: ""
    });
  };
  render() {
    return (
      <Form onSubmit={this.addNewComment}>
        <Input className='comment-input'
          placeholder='Add a comment'
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />              
      </Form>    
    );
  }
}

export default CommentForm;
