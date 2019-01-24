import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

class App extends Component {
  
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    inputMessage: {'Amy':'','John':''},
    //submitted: {'Amy':false, 'John':false},
    messages : []
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = (username) => {
    return this.state.inputMessage[username].trim().length === 0;
    //return false
  };

updateInputMsg = (event, username) => {
  const newInput = event.target.value;
  this.setState({
    inputMessage: {[username]:newInput}
  });
};

	handleSubmit = (event, username) => {
      event.preventDefault();
      //this.props.submitted_user = username;
      /*this.setState({
        submitted: {[username]:true}
      });*/
      /*this.setState(
        (oldState, props) => ({messages:[...oldState.messages, {[uname]:oldState.inputMessage[uname]}]})
      );*/
      this.setState(
        (oldState, props, username) => (
          {
	          'messages':[...oldState.messages, {'username': username, 'text': oldState.inputMessage[usernamenpm]}]
          }
        ),
         () => {this.props.submitted_user = ''}
      );
    };

/*
	componentDidUpdate(prevProps, prevState) {
      const usersSubmitted = prevState.users.filter(user => prevState.submitted[user.username] === true)
		if (usersSubmitted.length > 0) {
            this.setState(
          		{
                  'messages':[...prevState.messages, usersSubmitted.map(user => ({ 'username': user.username, 'text': prevState.inputMessage[user.username]}))],
					'submitted':usersSubmitted.map(user => ({[user.username]:false})),
}
            );
        }
    }
*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 2 - All Together</h1>
        </header>
        <div className="container">
          <ChatWindow 
    			messages={this.state.messages} 
				user={this.state.users[0]} 
				submitIsDisabled={this.isDisabled}
				updateInputMsg = {this.updateInputMsg}
				handleSubmit = {this.handleSubmit}
				inputMessage = {this.state.inputMessage[this.state.users[0].username]}
          />
 			<ChatWindow 
    			messages={this.state.messages} 
				user={this.state.users[1]} 
				submitIsDisabled={this.isDisabled}
				updateInputMsg = {this.updateInputMsg}
				handleSubmit = {this.handleSubmit}
				inputMessage = {this.state.inputMessage[this.state.users[1].username]}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
