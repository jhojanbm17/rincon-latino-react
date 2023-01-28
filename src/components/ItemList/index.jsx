import Item from '../Item';
import React from 'react'

function ItemList({data=[]}) {
  return (
     data.map(gaseosas => <Item key={gaseosas.id} info={gaseosas}/>)
  )
}

export default ItemList;