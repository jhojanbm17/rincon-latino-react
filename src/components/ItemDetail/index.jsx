import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const ItemDetail =({data}) => {
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        {data.title}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail;