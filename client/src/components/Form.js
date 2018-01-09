import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTweet, updateTweet } from '../actions/tweets';

class Form extends Component {
  state = { body: '' }

  componentDidMount() {
    debugger
    if (this.props.tweet)
      this.setState({ ...this.props.tweet });
  }

  handleSubmit = (e) => {
    debugger 
    e.preventDefault();
    const { dispatch, tweet, toggleEdit } = this.props;
    if(tweet) {
      dispatch(updateTweet(this.state))
      toggleEdit();
    }
    else {
      dispatch(addTweet(this.state));
      this.setState({ body: '' });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Tweet'
          onChange={(e) => this.setState({ body: e.target.value })}
          value={this.state.body}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect()(Form);