import React from 'react';
import Moment from 'react-moment'

import './CommentSectionStyles.css';

class CommentSection extends React.Component {
    constructor() {
        super();   
    }

    render () {
        return (
        <div className='post-card'>
           <div className="post-info">
                <h3 className="username"><img className ="thumb-image" src={this.props.item.thumbnailUrl} /> {this.props.item.username}: </h3>
                <img src={this.props.item.imageUrl} alt={this.props.item.username} />
                <p className="main-text">{this.props.item.comments[0].text}</p>
                <p className="comment-1">{this.props.item.comments[1].username}: {this.props.item.comments[1].text}</p>
                <p className="comment-2">{this.props.item.comments[2].username}: {this.props.item.comments[2].text}</p>
                <Moment>{this.props.item.timestamp}</Moment>
                <input className="comment-field"
                placeholder='Add a comment...'
                // value={this.props.item}
                // name="item"
                // onChange={this.handleChanges}
                />
            </div>                 
        </div>
        );
    }
    
}

export default CommentSection;