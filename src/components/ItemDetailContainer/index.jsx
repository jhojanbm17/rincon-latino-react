import ItemDetail from '../ItemDetail';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const gaseosas = [
  {id:1, img:'https://jotajotafoods.com/wp-content/uploads/2022/03/REF00032-600x600.jpg', title:'POSTOBON UVA', category:'BebidasAzucaradas'},
  {id:2, img:'https://jotajotafoods.com/wp-content/uploads/2022/05/REF00003.jpg', title:'POSTOBON MANZANA', category:'BebidasAzucaradas'},
  {id:3, img:'https://jotajotafoods.com/wp-content/uploads/2022/03/REF00032-600x600.jpg', title:'ANTIOQUENIO TAPA AZUL', category:'BebidasAlcoholicas'},
  {id:4, img:'https://jotajotafoods.com/wp-content/uploads/2022/05/REF00003.jpg', title:'RON VIEJO CALDAS', category:'BebidasAlcoholicas'},
];

export const ItemDetailContainer=() =>{
  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect( () =>{
    const getData = new Promise(resolve =>{
      setTimeout( () =>{
        resolve(gaseosas);
      },);
    })
    getData.then(res=> setData(res.find(gaseosa => gaseosa.id === parseInt(detalleId))));
  
  },[])
  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;