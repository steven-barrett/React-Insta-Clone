import React from "react";

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
      <form onSubmit={this.addNewComment}>
        <input className='form-input'
          placeholder='Add a comment'
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />              
      </form>    
    );
  }
}

export default CommentForm;
