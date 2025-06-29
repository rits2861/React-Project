import { useState } from "react"
import './App.css'
 export default function UserAdd(){
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
     const createUser=async()=>{
        console.log(name,age,email);
        const url="http://localhost:3000/users";
        let response=await fetch(url,{
            method:"post",
        body:JSON.stringify({name,email,age})
     });
     response=await response.json();
     if(response){
        alert("new user added")
     }
    }
    return(
        <div  style={{textAlign:"center"}}>
        <h1>Add New User</h1>
        <input type="text" className="username" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
        <br /> <br />
      
        <input type="text" className="username"onChange={(event)=>setAge(event.target.value)}  placeholder="Enter Age" />
        <br /> <br />
        <input type="text" className="username"onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
        <br /> <br />
        <button className="username" onClick={createUser}>Add User</button>
        </div>
    )
}