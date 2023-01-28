import React,{useEffect,useState} from 'react'
import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from 'react-router-dom';

const gaseosas = [
    {id:1, img:'https://jotajotafoods.com/wp-content/uploads/2022/03/REF00032-600x600.jpg', title:'POSTOBON UVA', category:'BebidasAzucaradas'},
    {id:2, img:'https://jotajotafoods.com/wp-content/uploads/2022/05/REF00003.jpg', title:'POSTOBON MANZANA', category:'BebidasAzucaradas'},
    {id:3, img:'https://jotajotafoods.com/wp-content/uploads/2022/03/REF00032-600x600.jpg', title:'ANTIOQUENIO TAPA AZUL', category:'BebidasAlcoholicas'},
    {id:4, img:'https://jotajotafoods.com/wp-content/uploads/2022/05/REF00003.jpg', title:'RON VIEJO CALDAS', category:'BebidasAlcoholicas'}
]

export const ItemListContainer =() =>{
    const [data,setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(gaseosas)
            },);
        });

    if (categoriaId){
        getData.then(res=> setData(res.filter(gaseosas => gaseosas.category === categoriaId)));
    }else{
        getData.then(res=> setData(res))
    }
          
    },[categoriaId]);
    return (
        <>
        <Title/>
        <ItemList data={data}/>
        </>
        
    );
}

export default ItemListContainer;