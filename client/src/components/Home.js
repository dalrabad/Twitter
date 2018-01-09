import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { connect }from 'react-redux';
import Form from './Form';
import DisplayTweets from './DisplayTweets';

class Home extends Component {

  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Twitter</Header>
        <Form />
        <DisplayTweets />
      </Container>
    );
  }
}

export default connect()(Home);
