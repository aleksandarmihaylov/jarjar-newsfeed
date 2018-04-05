import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../App.css';

export default class Comment extends React.PureComponent {
  renderComments = () => {
    if (this.props.show != true) {
      return <div>The force is strong with this one</div>;
    } else {
      return this.props.comments.map((comment, index) => {
        return (
          <div>
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
    }
  };
  render() {
    return <div>{this.renderComments()}</div>;
  }
}
