
import Image from'./image.js';
import logo from '../logo.svg';

function Profile(props) {
const handleName =()=>{
alert(props.user) 
    } 
  const styleobject={display:"flex",flexDirection:"column",alignItems: "center", color:"red",textAlign:"center",fontSize:"25px"}
  const styleobjectimg={width:"250px" ,height:"250px"  } 
    return(
    <div style={styleobject}> {props.fullName} {props.bio} {props.profession} 
     <a href='ggg' onClick={handleName}>clickme</a> 
     <div style={styleobjectimg}><Image  >{logo}</Image></div>
    
    </div> );
}
  Profile.defaultProps = {
    fullName: "undefined",
    bio:"undefined",
    profession:"undefined",
    user:"undefined"

   };
  export default Profile;