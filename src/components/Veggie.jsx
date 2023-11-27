import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {  Splide,SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue'
import {Link} from 'react-router-dom';

const apikey=import.meta.env.VITE_REACT_APP_API;

const Veggie = () => {
  const [veggie,setVeggie]=useState([]);
    
  const getVeggie=async()=>{
      const check=localStorage.getItem('veggie');
      if(check){
          setVeggie(JSON.parse(check));
      }
      else{ 
          try{
              const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=9&tags=vegetarian`);
              //const data = await res.json();
              localStorage.setItem("veggie",JSON.stringify(res.data.recipes));
              console.log(res);
              setPopular(res.data.recipes);
              
          }
          catch(error){
              console.log('error');
          }
      }
      }
      useEffect(()=>{
          getVeggie();
      },[])
      
  return (
    <div>
      <Wrapper>
            <h1>Our Vegetarian items</h1>
            <Splide
            options={{
                perPage:3,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'4rem'

                
            
            }}>
            {veggie.map((recipe)=>{
                return(
               <SplideSlide key={recipe.id}>
                <Card>
                 <Link to={'/recipe/'+recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}/>
                </Link>
               </Card>
               </SplideSlide>
                );
                
            })}
            
            </Splide>

        </Wrapper>
        
    
    
      </div>
  )
}
const Wrapper=styled.div`
   margin-top:2rem;
   margin-bottom:-15rem;


   
`;

const Card=styled.div`
   position:relative; 
   border-radius:10px;
   min-height:25rem;
   overflow:hidden;
   



   img {
    position:absolute
    margin:2rem 0rem;
    border-radius:2rem;
    width:100%;
    height:100%;
    object-fit:cover;


   }

   p{
    position:absolute;
    z-index:50;
    left:50%;
    bottom:30%;
    transform:translate(-50%,0%);
    color:black;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center
   }
`;

export default Veggie