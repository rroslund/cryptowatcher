import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment,Button } from 'semantic-ui-react'
const Profile = ({username,onProfileClick}) =>(
    <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a' onClick={onProfileClick}>Profile</Button>
        </Menu.Item>
      </Menu.Menu>
)
export default Profile;