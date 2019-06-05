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
        <div className='post-card'>
           <div className="post-info">                
                <h3 className="username"><img className ="thumb-image" src={this.props.item.thumbnailUrl} /> {this.props.item.username}: </h3>
                <img src={this.props.item.imageUrl} alt={this.props.item.username} />
                <img src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png' className='heart-icon' onClick={this.incrementLikeCount} alt='Heart' />                
                <div className='like-count'> {this.props.item.likes} Likes</div>
                <div className="div-comments">
                    {this.state.comments.map(comment => {
                        return <p><b>{comment.username}:</b>  {comment.text}</p>
                    })}
                </div>
                <i><Moment parse="MMMM Do YYYY, h:mm:ss a" fromNow>{this.props.item.timestamp}</Moment></i>
                <AddCommentForm  addNewComment={this.addNewComment}  />              
            </div>                 
        </div>
        );
        
    }
    
}

export default CommentSection;