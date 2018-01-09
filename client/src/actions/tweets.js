import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getTweets = () => {
  return dispatch => {
    axios.get('/api/tweets')
      .then( res => {
        dispatch({ type: 'GET_TWEETS', tweets: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get tweets', 'red'));
      })
  }
}
// tweet = { body: 'tweet' }
export const addTweet = (tweet) => {
  return dispatch => [
    // { tweet: { body: 'tweet' } }
    axios.post('/api/tweets', { tweet })
      .then( res => {
        dispatch({ type: 'ADD_TWEET', tweet: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to create tweet', 'red'));
      })
  ]
}

// tweet = { body: 'udpated', id: 1, user_id: 1 }
export const updateTweet = (tweet) => {
  return dispatch => {
    axios.put(`/api/tweets/${tweet.id}`, { tweet })
      .then( res => {
        dispatch({ type: 'UPDATE_TWEET', tweet: res.data });
        dispatch(setHeaders(res.headers));
      })
  }
}

export const deleteTweet = (id) => {
  return dispatch => {
    axios.delete(`/api/tweets/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_TWEET', id });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to delete tweet', 'red'));
      })
  }
}

