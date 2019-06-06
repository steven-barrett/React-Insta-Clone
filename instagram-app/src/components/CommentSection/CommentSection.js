import React from 'react';
import Moment from 'react-moment'

import AddCommentForm from './AddCommentForm';

import styled from 'styled-components';
import './CommentSectionStyles.css';

// Styled components
const Wrapper = styled.div`
padding-bottom: 20px;
`;
const H3 = styled.h3`
text-align: left;
padding-left: 50px;
`;
const Div = styled.div`
`;
const InnerDiv = styled.div`
text-align: left;
display: inline-block;
border-style: solid;
border-width: 1px;
border-color: lightgray;
margin-left: auto;
margin-right: auto;
`;

class CommentSection extends React.Component {
    constructor() {
        super(); 
        this.state = {
            comments: []            
        }  
    }
    
    addNewComment = (commentText) => {
        let newComment = {
            id: Math.floor(Math.random() * 2),
            // localStorage should never be empty as we can't get here without it   >>> Math.random().toString(36).substr(2, 9) <<< Random Username                    
            // username: localStorage.getItem('username'),
            username: Math.random().toString(36).substr(2, 9),
            text: commentText
        }        
        this.setState(prevState => {                        
            return {
                comments: [...prevState.comments, newComment]
            };
          });      
    }
    incrementLikeCount = () => {
        this.props.item.likes++;
        
        // Call setState to re render the components
        this.setState(() => {            
            return {
                
            };
          });      
    }

    render () {
        // Set the state to the incoming comments array from the props  
        
        if (this.state.comments.length === 0) {
            this.state.comments = this.props.item.comments;
        }  
                
        return (
        <Wrapper>
           <InnerDiv className="post-info">                
                <H3><img className ="thumb-image" src={this.props.item.thumbnailUrl} /> {this.props.item.username}: </H3>
                <img src={this.props.item.imageUrl} alt={this.props.item.username} />
                <img src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png' className='heart-icon' onClick={this.incrementLikeCount} alt='Heart' />                
                <Div> {this.props.item.likes} Likes</Div>
                <Div className="div-comments">
                    {this.state.comments.map(comment => {
                        return <p><b>{comment.username}:</b>  {comment.text}</p>
                    })}
                </Div>
                <i><Moment parse="MMMM Do YYYY, h:mm:ss a" fromNow>{this.props.item.timestamp}</Moment></i>
                <AddCommentForm  addNewComment={this.addNewComment}  />              
            </InnerDiv>                 
        </Wrapper>
        );
        
    }
    
}

export default CommentSection;