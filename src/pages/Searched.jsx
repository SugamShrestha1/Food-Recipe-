import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {styled} from 'styled-components';
import{Link} from 'react-router-dom';

const apikey=import.meta.env.VITE_REACT_APP_API;

const Searched = () => {
    const[searchedrecipe,setSearchedRecipe]=useState([]);
    const params=useParams();

    const getSearchedRecipe= async(name)=>{
      const res= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${name}`);
      console.log(res);
       setSearchedRecipe(res.data.results);
       
    } 

    useEffect(()=>{
        getSearchedRecipe(params.search);
        console.log(params.search);
    },[params.search]);

     return (
    <div>
      <Grid>
      {searchedrecipe.map((item)=>{
        return(
          <Card key={item.id}>
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
    border-radius:2rem;
  }

  a{
    text-decoration:none;

  }
  h4{
    text-align:center;
    padding:1rem;
  }
  `;

export default Searched