import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './comment';
import '../App.css';

export default class ViewUpdate extends React.PureComponent {
  state = {
    isCommentsOpen: false,
  };

  handleShowHide = () => {
    this.setState({ isCommentsOpen: !this.state.isCommentsOpen });
  };

  render() {
    const { by, comments, created, id, imageSrc, text } = this.props;
    return (
      <div>
        <div>{by}</div>
        <div>
          <button onClick={this.handleShowHide} />
          <Comment show={this.state.isCommentsOpen} comments={comments} />
        </div>
        <div>{id}</div>
        <img src={imageSrc} />
        <div>{text}</div>
      </div>
    );
  }
}
