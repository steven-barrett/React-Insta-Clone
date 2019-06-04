import React from 'react';
import Moment from 'react-moment'

import AddCommentForm from './AddCommentForm';

import './CommentSectionStyles.css';

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
            username: Math.random().toString(36).substr(2, 9),
            text: commentText
        }
        this.setState(prevState => {            
            return {
                comments: [...prevState.comments, newComment]
            };
          });      
    }

    render () {
        // Set the state to the incoming comments array from the props  
        
        if (this.state.comments.length === 0) {
            this.state.comments = this.props.item.comments;
        }  
        
        console.log(this.state.comments)
        return (
        <div className='post-card'>
           <div className="post-info">
                <h3 className="username"><img className ="thumb-image" src={this.props.item.thumbnailUrl} /> {this.props.item.username}: </h3>
                <img src={this.props.item.imageUrl} alt={this.props.item.username} />
                <div className="div-comments">
                    {this.state.comments.map(comment => {
                        return <p>{comment.username}:  {comment.text}</p>
                    })}
                </div>
                <Moment parse="MMMM Do YYYY, h:mm:ss a" fromNow>{this.props.item.timestamp}</Moment>  
                <AddCommentForm  addNewComment={this.addNewComment}  />              
            </div>                 
        </div>
        );
        
    }
    
}

export default CommentSection;