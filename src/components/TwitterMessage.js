import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleNewMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleNewMessage} value={this.state.message}/>
      {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
