import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className="gaseosa">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={info.img} />
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>
        {info.title}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Item;