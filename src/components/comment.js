import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../App.css';

export default class Comment extends React.PureComponent {
  state = {
    isCommentsOpen: false,
  };
  renderComments = () => {
    return this.props.map((comment, index) => {
      return (
        <div className="comments-list">
          <ul key={index}>
            <li>{comment.text}</li>
            <li>{comment.by}</li>
            <li>
              <img src={comment.imageSrc} />
            </li>
          </ul>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderComments()}</div>;
  }
}
