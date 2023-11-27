import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link,useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import axios from 'axios';

const apikey=import.meta.env.VITE_REACT_APP_API;


const Cuisine = () => {
const [cuisine,setCuisine]=useState([]);
let params=useParams();

const getCuisine=async(name)=>{
     const res= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&cuisine=${name}`);
     setCuisine(res.data.results);
     console.log(res)
}

useEffect(()=>{
  getCuisine(params.type);
  console.log(params.type);
},[params.type]);

  return (
    <div>
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Card>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt=''/>
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
    </div>
  )

}

const Grid=styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
  grid-gap:3rem;
  
  `;
  const Card=styled.div`
  img{
    width:100%;
    boder-radius:2rem;
  }

  a{
    text-decoration:none;

  }
  h4{
    text-align:center;
    padding:1rem;
  }
  `;
  
  
  export default Cuisine;