import React from 'react'
import PortfolioItem from './PortfolioItem'
import Row from 'react-bootstrap/Row'

const PortfolioGrid = ({portfolio}) => {

  return (
    <>
      <h2>Projects</h2>
      <Row>
        {portfolio.map((item, i) => (
          <PortfolioItem key={i} item={item}/>
          ))}
      </Row>
    </>
  )
}

export default PortfolioGrid