import React from 'react';

import PropTypes from 'prop-types';

import CommentSection from 'C:/Users/Steve.LAPTOP-2ASM0AJ1/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="post-container">                
              {this.props.data.map(item => { 
                return (
                    <CommentSection item={item} />
                      );      
              })}
            </div>
          );        
    }
}
PostContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            imageUrl: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                id: PropTypes.number,
                username: PropTypes.string,
                text: PropTypes.string
                })
            )
        })
    )
};

export default PostContainer;