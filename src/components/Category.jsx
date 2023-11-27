import {GiHamburger,GiChopsticks,GiNoodles} from 'react-icons/gi';
import {FaPizzaSlice} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {styled} from 'styled-components';

const Category = () => {
  return (
    <List>
       <SLink to={'/cuisine/italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
       </SLink>
       <SLink to={'/cuisine/american'}>
        <GiHamburger/>
        <h4>American</h4>
       </SLink>
       <SLink to={'/cuisine/japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
       </SLink>
       <SLink to={'/cuisine/thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
       </SLink>
    </List>
  )
}
const List=styled.div`
 display:flex;
 justify-content:center;
 margin:2rem 0rem;
`
const SLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
background:linear-gradient(35deg,#3c3c3c,#616161);
text-decoration:none;
color:white;
margin-right:2rem;
transform:scale(0.8);
cursor:pointer;
height:6rem;
width:6rem;


h4{
  color:white;
  font-size:12px;
}

&:hover{
  background:linear-gradient(35deg,orange,orange);
}

&.active{
  background:linear-gradient(35deg,orange,orange);
}




`

export default Category
