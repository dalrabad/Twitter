import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
import Form from './Form';
import { deleteTweet } from '../actions/tweets';

class Tweet extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    const { tweet, id, dispatch } = this.props;
    const { editing } = this.state;
    return (
      <Card>
      <Card.Content>
        {
          editing ? 
            <Form tweet={tweet} toggleEdit={this.toggleEdit} />
          :
            <Card.Header>{tweet.body}</Card.Header>
        }
        <Card.Content extra>
        {
          id === tweet.user_id &&
          <div>
            <Button onClick={this.toggleEdit}>
              { editing ? 'Cancel' : 'Edit' }
            </Button>
            <Button onClick={() => dispatch(deleteTweet(tweet.id))}>
              Delete
            </Button>
          </div>
        }
        </Card.Content>
      </Card.Content>
    </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.user.id }
}

export default connect(mapStateToProps)(Tweet);