import React,{useState} from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';


const Search = () => {
    const navigate=useNavigate('');
    const [input,setInput]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/Searched/'+input);
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        
        <div>
        <FaSearch></FaSearch>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
    </FormStyle>
  )
}

const FormStyle=styled.form`

display:flex;
justify-content:center;


div{
    width:100%;
    position:relative;
    
    
    
    
}

input{
    position:relative;
    background-color:black;
    color:white;
    width:500px;
    height:30px;
    border-radius:50px;
    border:none;
    left:100px;
    

    



    

}
svg{
    position:absolute;
    color:black;
    top:50%;
    left:-100%;
    transform:translate(100%,-50%);
    text-align:right;
    
    
    
}


`

export default Search