import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import AddCoin from './components/AddCoin';
import VisibleCoinList from './containers/VisibleCoinList';
import UserProfile from './containers/UserProfile';
const Layout = () => (
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
      {/* <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>A text container is used for the main container, which is useful for single column layouts.</p> */}
      <AddCoin/>
      <VisibleCoinList/>
      
    </Container>
  </div>
)

export default Layout