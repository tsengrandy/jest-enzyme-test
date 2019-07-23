import React, { Component } from 'react';
import {
  Col,
  Button,
  Container,
  Row,
} from 'react-bootstrap'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonText: 'Play Game',
      gameWon: false,
    }
  }

  toggleResult(){
    const newButtonText = this.state.gameWon ? "Play Game" : "Excellent!"
    const newGameWon = this.state.gameWon ? false : true
    this.setState({buttonText: newButtonText, gameWon: newGameWon})
  }

  render () {

    return (
      <Container>
          <h1>Testing Example</h1>
          <Row>
            <Col xs={4}>
              <Button onClick={this.toggleResult.bind(this)}>
                {this.state.buttonText}
              </Button>
            </Col>
            <Col xs={8}>
              <span id="result-text">
                {this.state.gameWon &&
                <h4>Congratulations! You have won!</h4>
              }
              </span>
            </Col>
          </Row>
      </Container>
    );
  }
}
