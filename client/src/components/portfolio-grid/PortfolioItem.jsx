import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const PortfolioItem = ({item}) => {
  return (
    <Col>
      <a href={item.link}>
          <Card
            text='light'  
            bg='dark'
            border='light'
            >
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.desc}
            </Card.Text>
          </Card>
      </a>
    </Col>
  )
}

export default PortfolioItem