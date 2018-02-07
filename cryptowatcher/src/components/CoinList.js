import React from 'react'
import PropTypes from 'prop-types';
import Coin from './Coin'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

const CoinList = ({total, coins, onCoinClick }) => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
          <Segment>
            <Coin key="total" {...total}/>
          </Segment>
      </Grid.Column>
      
      <Grid.Column>
        {coins.map((item,i) =>
          <Segment>
              <Coin key={item.id} {...item}/>
          </Segment>
          )}
      </Grid.Column>
      <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  // <ul>
  //   {coins.map(coin =>
  //     <Coin
  //       key={coin.id}
  //       {...coin}
  //       onClick={() => onCoinClick(coin.id)}
  //     />
  //   )}
  // </ul>
)

CoinList.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  total:PropTypes.object
}

export default CoinList