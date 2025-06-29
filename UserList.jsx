
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
 export default function UserList(){
     const [UserData,setUserData]=useState([]);
     const [loading,setLoading]=useState(false);
     const url ="http://localhost:3000/users";
     const navigate=useNavigate();
     useEffect(()=>{
         setLoading(true)
         getUserData();
     },[])
   const  getUserData=async()=>{
     let response= await fetch(url);
     response=await response.json();
     console.log(response);
     setUserData(response);
     setLoading(false)
     
 }
 const deleteUser=async(id)=>{
    console.log(id);
    let response= await fetch(url+"/"+id,{method:"delete"});
     response=await response.json();
     if (response){
        alert("record successfully deleted")
        getUserData();
     }
    
 }
   const editUser=(id)=>{
  navigate("/edit/"+id)
   }
 return(
 <div>

 <ul  className="user-list user-list-head">
     <li>Name</li>
     <li>Age</li>
     <li>Email </li>
     <li>Action </li>
 </ul>
 {
     !loading?
     UserData.map((user)=>(
 <ul key={user.name} className="user-list">
     <li>{user.name}</li>
     <li>{user.age}</li>
     <li>{user.email} </li>
     <li><button  onClick={()=>deleteUser(user.id)}className="del">Delete</button> </li>
     <li><button  onClick={()=>editUser(user.id)}className="del">Edit</button> </li>
 </ul>
     ))
     :<h1> Data Loading...</h1>
 }
  </div>
 )
  }
 