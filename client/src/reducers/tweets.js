const tweets = (state = [], action) => {
  switch (action.type) {
    case 'GET_TWEETS':
      // action = { type: 'GET_TWEETS', tweets: res.data }
      return action.tweets;
    case 'ADD_TWEET':
      // action = { type: 'ADD_TWEET', tweet: res.data }
      return [action.tweet, ...state];
    case 'UPDATE_TWEET':
    // action = { type: 'UPDATE_TWEET', tweet: res.data }
    return state.map( tweet => {
      if (tweet.id === action.tweet.id)
        return action.tweet;
      return tweet;
    })
    case 'DELETE_TWEET':
    // action = { type: 'DELETE_TWEET', id: 1 }
    return state.filter( tweet => tweet.id !== action.id);
    default: 
      return state;
  }
}

export default tweets;
