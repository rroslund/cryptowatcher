import React from 'react'
import {FormattedNumber} from 'react-intl';
import { Card, Icon, Image,Header } from 'semantic-ui-react'

const Coin = ({total, name,image,id,volume,change,totalchange }) => (
  
  <Card>
    {image && <Image src='/assets/images/avatar/large/matthew.png' /> }
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Meta>
        {change!=0 && <Header as='h4' color={change>0?'green':'red'}><FormattedNumber minimumFractionDigits= {2} value={change} style="percent" /> </Header>} 
        {totalchange!=0 && <Header as='h4'  color={totalchange>0?'green':'red'}><FormattedNumber minimumFractionDigits= {2} value={totalchange} style="percent" /></Header>}
      </Card.Meta>
      <Card.Description>
        <FormattedNumber value={total} />
        {/* {total && <span>{total}</span>} */}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Coin