import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../actions/tweets';
import Tweet from './Tweet';

class DisplayTweets extends Component {

  componentDidMount() {
    this.props.dispatch(getTweets())
  }

  render() {
    return (
      <div>
        {/* each item in the array needs a unique key */}
        {
          this.props.tweets.map( tweet => (
            <Tweet tweet={tweet} key={tweet.id} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    tweets: state.tweets,
  }
}

export default connect(mapStateToProps)(DisplayTweets);
