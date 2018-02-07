import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import AddCoin from './components/AddCoin';
import VisibleCoinList from './containers/VisibleCoinList';
import UserProfile from './containers/UserProfile';
import {stopTimer} from './actions';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    stopTimer(this.streamId);
  }
  render(){
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src='/logo.png'
                style={{ marginRight: '1.5em' }}
              />
              Project Name
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <UserProfile/>
            
          </Container>
        </Menu>
    
        <Container text style={{ marginTop: '7em' }}>
            <AddCoin/> 
        </Container>
        <Container text style={{ marginTop: '7em' }}>
            
            
          {/* <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p> */}
          
          <VisibleCoinList/>
          
        </Container>
      </div>
    );
  }
}
export default App;