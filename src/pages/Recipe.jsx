import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {styled} from 'styled-components';

const apikey=import.meta.env.VITE_REACT_APP_API;

const Recipe = () => {
    const [fetchdetail,setFetchDetail]=useState({});
    const [activetab,setActiveTab]=useState('');
    let params=useParams();
   

    const getRecipe=async()=>{
        const res=await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apikey}`);
        setFetchDetail(res.data);
        console.log(res);
    }

    

    

    useEffect(()=>{
        getRecipe();
    },[params.name]);
    
    
  return (
    
      <Wrapper>
      <div>
      <h2>{fetchdetail.title}</h2>
      <img src={fetchdetail.image} alt=''/>
      </div>
      <Info>
        <Button  className={activetab==='Instructions'?'active':''}
        onClick={()=>setActiveTab('Instructions')}>Instructions</Button>
        <Button className={activetab==='Ingredients'?'active':''} onClick={()=>setActiveTab('Ingredients')}>Ingredients</Button>
        {activetab==='Instructions' &&(
           <div>
           <h3 dangerouslySetInnerHTML={{__html: fetchdetail.summary}}></h3>
           <h3 dangerouslySetInnerHTML={{__html: fetchdetail.instructions}}></h3>
         </div>
        )}

     {activetab==='Ingredients' &&(
      <ul>
      {fetchdetail.extendedIngredients.map((ingredient)=>(
       
            <li key={ingredient.id}>{ingredient.original}</li>
       
      ))}
   </ul>
        )}
        
      </Info>
      </Wrapper>
    
  );
}

const Wrapper=styled.div`
display:flex;
margin-top:8rem;
margin-bottom:5rem;
margin-right:2rem;

.active{
  background:linear-gradient(35deg,#3c3c3c,#616161);
  color:white;
}
img{
  height:300px;
  width:340px;
}
h2{
  margin-top:2rem;
  width:350px;
  

}
li{
  font-size:20px;
  line-height:2.5rem;

}
ul{
  
  margin-top:2rem;
}

`;
const Button=styled.button`

border:2px solid black;
padding:1rem 1rem;
color:#313131;
background:white;
margin-right:2rem;
margin-top:1rem;
border-radius:5px;



`

const Info=styled.div`

align-items:flex-start;
margin-left:4rem;





`;


export default Recipe