import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {  Splide,SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue'
import {Link} from 'react-router-dom';


const apikey=import.meta.env.VITE_REACT_APP_API;


const Popular = () => {
    
    const [popular,setPopular]=useState([]);
    
    const getPopular=async()=>{
        const check=localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check));
        }
        else{
            try{
                const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=9`);
                //const data = await res.json();
                
                console.log(res);
                setPopular(res.data.recipes);

                localStorage.setItem("popular",JSON.stringify(res.data.recipes));
                
            }
            catch(error){
                console.log('error');
            }
        }
        }
        useEffect(()=>{
            getPopular();
        },[])
        



   
  return (
    <div>
    
        
        <Wrapper>
            <h1>Popular Items</h1>
            <Splide
            options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'4rem'

                
            
            }}>
            {popular.map((recipe)=>{
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
  );
}
const Wrapper=styled.div`
   margin:2rem 0rem;


   
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
    bottom:40%;
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


export default Popular