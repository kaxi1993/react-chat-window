import React, { Component } from 'react';

import Message from './Messages';
import TypingIndicator from './TypingIndicator';

class MessageList extends Component {
  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.props.messages.map((message, i) => {
          return <Message message={message} onCarouselClick={this.props.onCarouselClick} key={i} />
        })}
        {this.props.showTypingIndicator && <TypingIndicator />}
      </div>)
  }
}

export default MessageList
